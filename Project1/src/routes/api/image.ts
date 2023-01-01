import express from 'express';
import path from 'path';
import Resize from '../../utilities/resize2';
import apicache from 'apicache'

const image = express.Router();
let cache = apicache.middleware;

image.get('/', cache("10 minutes"), (req, res) => {
    let filename: string = req.query.filename as string;
    let width: number = (req.query.width as unknown) as number;
    let height : number = (req.query.height as unknown) as number;
    var options = {
        root: path.join('./imageProcess')
    };
    if (!filename && !width && !height) { 
        res.status(200);
        return;
        
    }
    else { 
        const resizeImg = async (filename: string, width: number, height: number) =>  { 
            await Resize(filename, width, height);
            
        }
         resizeImg(filename, width, height);
        var file = `${filename}_thumb.jpg`;
        res
        .status(200)
        .sendFile(file, options, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('Sent:', file);
            }
        });
    }
    
});
export default image;