import Router from "express";
import multer from 'multer'
import fs from 'fs'
import fs_mover from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url';
import multiparty from 'multiparty'
import { User } from "../models/userModel.js";
const app = Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 
app.post('/upload', function (req, res, next) {
 
    var form_data = new multiparty.Form();
    form_data.parse(req, function(err, fields, files) {

      try{
            var fileName = fields['name'][0] + '.jpg'
            var file = files[0]
            var sourcePath = files.files[0].path
            
            const directoryPath = path.join(__dirname, '..\\data\\banner');
            var  destpath = directoryPath + '\\' + fileName;
            
            fs.exists(destpath, function(exists) {
              if(exists) {
                //Show in green
                fs.unlinkSync(destpath);
                
                fs_mover.move(sourcePath, destpath, function (err) {
                    if (err) return console.error(err)
                    res.end("success");
                });

              } else {

                    fs_mover.move(sourcePath, destpath, function (err) {
                    if (err) return console.error(err)
                    res.end("success");
                    });
              }
            });

      }catch(err){
        console.log(err)
        res.end("failed")
      }

    });

})
app.post('/upload_profile', function (req, res, next) {
 


    var form_data = new multiparty.Form();
    form_data.parse(req, async function(err, fields, files) {
            

        if(files.files) {
             
            var fileName = fields['name'][0] + '.jpg'
            var file = files[0]
            var sourcePath = files.files[0].path
             
            const directoryPath = path.join(__dirname, '..\\data\\profile');
            var  destpath = directoryPath + '\\' + fileName;
            
            fs.exists(destpath, function(exists) {
              if(exists) {
                //Show in green
                fs.unlinkSync(destpath);
                
                fs_mover.move(sourcePath, destpath, function (err) {
                    if (err) return console.error(err)
                    // res.end("success");
                });

              } else {

                    fs_mover.move(sourcePath, destpath, function (err) {
                    if (err) return console.error(err)
                    // res.end("success");
                    });
              }
            });
        }

        var blockName =  fields['blockName'][0]
        var twiterName =  fields['twiterName'][0]
        var instagramName = fields['instagramName'][0]
        var name = fields['name'][0]

        const users =  await User.find({ algo_address: name })
         
        if(users.length == 0) {
           return  res.send({ result: "failed"})
        }else{

            try{
                const user = users[0]
                user.blockrewardUserName = blockName
                user.twiterName = twiterName
                user.instagramName = instagramName
                await user.save()
                }catch(err){
                    console.log(err)
                    return  res.send({ result: "failed"})
            }
           return  res.send({ result: "success"})
        }


    });

})

  
app.get('/get_banner_file',(req,res)=>{

     
    try{

            const directoryPath = path.join(__dirname, '..\\data\\banner');
            var  pathname = directoryPath + '\\' + req.query.name;
            // console.log(pathname)
            fs.readFile(pathname, function(err, data){
              if(err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
              } else {
                // if the file is found, set Content-type and send data
                res.setHeader('Content-type','image/png');
                res.end(data);
              }

            });    

    }catch(err){
      console.log(err)
    }
})
app.get('/get_profile_file',(req,res)=>{

     
    try{

            const directoryPath = path.join(__dirname, '..\\data\\profile');
            var  pathname = directoryPath + '\\' + req.query.name;
            // console.log(pathname)
            fs.readFile(pathname, function(err, data){
              if(err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
              } else {
                // if the file is found, set Content-type and send data
                res.setHeader('Content-type','image/png');
                res.end(data);
              }

            });    

    }catch(err){

    }
})

export default app;