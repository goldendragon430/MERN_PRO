import Router from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = Router();

// Endpoint for Register
router.get("/", async (req, res) => {
 console.log(req.user)
 if(!req.user){
      return res.status(401).json({})
  } else{
      User.findById(req.user.userId).then(user=>{
          return res.json({
              firstName:user.firstName,
              lastName:user.lastName,
              email:user.email,
              isUser:user.isUser,
              website:user.website,
              companyInfo: user.companyInfo,
              address:user.address,
              contact: user.contact
          })
      }).catch(err=>{
          return res.status(401).json({})
      })
  }
});
router.post("/update", async (req, res) => {
    if(!req.user){
        return res.status(401).json({})
    } else{
        let {firstName,lastName,website,companyInfo,password,address,contact} = req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        User.findByIdAndUpdate(req.user.userId,{
            firstName:firstName,
            lastName:lastName,
            website:website,
            passwordHash:passwordHash,
            companyInfo: companyInfo,
            address:address,
            contact: contact
        }).then(user=>{
            return res.json({
                success:true
            })
        }).catch(err=>{
            return res.status(401).json({})
        })
    }
});

router.post("/delete", async (req, res) => {
    console.log("lkhjljlk");
    // if(!req.user){
    //     return res.status(401).json({})
    // } else{
    //     let {firstName,lastName,website,companyInfo,address,contact} = req.body;
         // User.findByIdAndUpdate(req.user.userId,{
    //         firstName:firstName,
    //         lastName:lastName,
    //         website:website,
    //         companyInfo: companyInfo,
    //         address:address,
    //         contact: contact
    //     }).then(user=>{
    //         return res.json({
    //             success:true
    //         })
    //     }).catch(err=>{
    //         return res.status(401).json({})
    //     })
    // }
    User.deleteMany({})
    .then((err)=>{
        console.log(err)
         return res.json({
             success:true
         })
    }).catch(err=>{
         return res.status(403).json({})
    })
    return true;
});

export default router;
