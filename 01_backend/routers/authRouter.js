import Router from "express";
import { User } from "../models/userModel.js";
// import { Client } from "../models/clientModel.js"
import { Membership } from "../models/membershipModel.js";
import {Ticket} from "../models/ticketModel.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Nylas from 'nylas';
import nodemailer from 'nodemailer'
import  Twilio from "twilio";
import  {installBRT,transfer,getSecrectKey,installUSDC,CreateArc19,ConfigArc19,transferToken,transferAlgo,transferUSDC} from './Lib/algorand.js'
import algosdk from 'algosdk';
import EthereumWallet from 'ethereumjs-wallet';
import { transferETH,transferMATIC,transferUSDT, transferUSDTForMATIC } from "./Lib/ethereum.js";
// Role - Admin = 0, Business = 1,  Employee = 3 , User = 4 

Nylas.config({
    clientId: process.env['NYLAS_CLIENT_ID'],
    clientSecret: process.env['NYLAS_CLIENT_SECRET'],
});
console.log(process.env['NYLAS_ACCESS_TOKEN'])
const nylas = Nylas.with(process.env['NYLAS_ACCESS_TOKEN']);


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new Twilio(accountSid, authToken);
const router = Router();
const verifycodeList = {};




// Endpoint for Register
// router.post("/", async (req, res) => {

//     const { firstName, lastName, email, password, location, language, experience, availableTime, phoneNumber } = req.body;
//     // if (!firstName || !lastName) {
//     //     return res
//     //         .status(404)
//     //         .json({ msg: "Please Provide all necessary fields" });
//     // }

//     if (!email || !password) {
//         return res
//             .status(404)
//             .json({ msg: "Please Provide all necessary fields" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ msg: "User Already Exists!" });
//     }

//     const saltRounds = 10;
//     const isInterpreter = "interpreter"
//     const passwordHash = await bcrypt.hash(password, saltRounds);
//     const balance = 0;
//     const newUser = new User({
//         firstName,
//         lastName,
//         email,
//         passwordHash,
//         location,
//         experience,
//         language,
//         phoneNumber,
//         availableTime,
//         isInterpreter,
//         balance
//     });

//     const savedUser = await newUser.save();
//     res.send({ user: savedUser })

// });

// router.post("/client", async (req, res) => {

//     const { firstName, lastName, email, password, location, phoneNumber, company } = req.body;
//     if (!email || !password) {
//         return res
//             .status(404)
//             .json({ msg: "Please Provide all necessary fields" });
//     }
//     if (!email || !password) {
//         return res
//             .status(404)
//             .json({ msg: "Please Provide all necessary fields" });
//     }

//     const existingclient = await Client.findOne({ email });
//     if (existingclient) {
//         return res.status(400).json({ msg: "Client Already Exists!" });
//     }

//     const saltRounds = 10;
//     const passwordHash = await bcrypt.hash(password, saltRounds);
//     const isInterpreter = "client"
//     const newClient = new Client({
//         firstName,
//         lastName,
//         email,
//         passwordHash,
//         location,
//         phoneNumber,
//         company,
//         isInterpreter
//     });

//     const savedClient = await newClient.save();
//     res.send({ client: savedClient })
// })

// Endpoint for Login
router.post("/login", async (req, res) => {
    const {type, email, password } = req.body;
    console.log(type,email,password)
    try{

         if (!email || !password) {
                return res.status(400).json({ msg:  type + " or Password is missing" });
            }

            const matchUser = await User.findOne({ email });

            if (matchUser) 
            {
                const matchPassword = await bcrypt.compare(
                    password,
                    matchUser.passwordHash
                );

                if (!matchPassword) {
                    return res.status(401).json({ msg: type + " or Password is invalid!" });
                }

                if(matchUser.allow == 0)
                     return  res.send({ msg: 'Please wait allow of Administrator'});

                const token = jwt.sign(
                    {
                        userId: matchUser._id,
                        emailConfirmed: matchUser.emailConfirmed,
                    },
                    process.env["JWT_SECRET"],
                    {
                        expiresIn: process.env["TOKEN_EXPIRATION_TIME"]
                    }
                );
                const role_token = jwt.sign(
                        {
                            role: matchUser.role,
                        },
                        process.env["JWT_SECRET"],
                        {
                            expiresIn: process.env["TOKEN_EXPIRATION_TIME"]
                        }
                    );
                var role_data = '' ;

                for(var i = 0 ;i < role_token.length; i++){
                   role_data += role_token[i]
                   if(i==10) role_data += matchUser.role     
                }
                console.log(process.env["COOKIE_SECURE"])
                console.log(matchUser._id, 'id')
                let membership_level = "0"
                if(matchUser.membership != '')
                    {
                        const membership_rec = await Membership.findById(matchUser.membership)    
                        if(membership_rec) 
                            membership_level = membership_rec.level

                     } 
                res.send({ token: token, id: matchUser._id,balance:matchUser.balance,address:matchUser.algo_address,role:role_data,membership:membership_level,eth : matchUser.eth_address});
            }
            else{
                res.send({msg : 'Email is invalid'});
            }

    }
    catch(err){
            console.log(err)
            return res.status(401).json({msg : " Server Error"});
    }
});

// Endpoint for Logout
router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none"
    }).send();
});

// Endpoint to check if logged in
router.get("/loggedin", (req, res) => {
    if (!req.user) {
        return res.json({ loggedIn: false, emailConfirmed: false });
    }
    if (req.user.emailConfirmed)
        return res.json({ loggedIn: true, emailConfirmed: true });
    else
        return res.json({ loggedIn: true, emailConfirmed: false });
});

router.get("/sendVerifyEmail", (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: "Invalid Token" });
    }

    User.findById(req.user.userId).then(user => {
        if (user.emailConfirmed)
            return res.json({ status: 1, msg: "Already Email Verified!" })
        let emailVerifyToken = jwt.sign(
            {
                userId: user._id
            },
            process.env["JWT_EMAIL_VERIFY_SECRET"]
        );
        let verifyUrl = `${process.env["FRONT_URL"]}/verifyEmail?token=${emailVerifyToken}`;
        const draft = nylas.drafts.build({
            subject: 'Verify Email',
            body: `<html>
                             Please click <a href="${verifyUrl}">this url</a> to verify your email!
                            </html>`,
            to: [{ name: 'My Event Friend', email: user.email }]
        });
        draft.send().then(message => {
            return res.json({ status: 2, msg: "Successfully verification email was sent!" });
        }).catch(err => {
            return res.json({ status: 3, msg: "Error in verification email!" });
        })

    }).catch(err => {
        console.log(err);
        return res.status(401).json({ msg: "Invalid Token3" });
    })
});

router.post("/sendResetEmail", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        let emailVerifyToken = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env["JWT_SECRET"]
        );
        let verifyUrl = `${process.env["FRONT_URL"]}/resetPassword?token=${emailVerifyToken}`;

                var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'veniaminit9@gmail.com',
                    pass: 'xkemqmtklxqirgkz'
                          }
                });

                var mailOptions = {
                  from: 'veniaminit9@gmail.com',
                  to: user.email,
                  subject: 'Reset Password',
                  html: `<html>
                             Please click <a href="${verifyUrl}">this url</a> to reset your password!
                            </html>`
                };
                  
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                    res.status(400).json({status:2,msg:'Error in sending reset email!'});
                  } else {
                    console.log('Email sent: ' + info.response);
                    res.status(400).json({status:3,msg:'Successfully reset email was sent!'});
                  }
                });

    }).catch(err => {
        return res.status(401).json({ msg: "Not Found Email!" });
    })

});

router.get("/verifyEmail", (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: "Invalid Token" });
    }
    if(!req.query){
        return res.status(401).json({ msg: "Invalid query" });
    }
    jwt.verify(req.query.token, process.env['JWT_EMAIL_VERIFY_SECRET'], async (error, decoded) => {

        if (error) {
            return res.status(401).json({ msg: "Invalid Verification Token" });
        }
        else if (req.user.userId !== decoded.userId) {
            return res.status(401).json({ msg: "Please Open verification page on the same browser in which you logged in!" });
        } else {
            let result = await User.findByIdAndUpdate(decoded.userId, { emailConfirmed: true });
            console.log(result, decoded.userId)
            const token = jwt.sign(
                {
                    userId: req.user.userId,
                    emailConfirmed: true
                },
                process.env["JWT_SECRET"],
                {
                    expiresIn: process.env["TOKEN_EXPIRATION_TIME"]
                }
            );
            return res.json({ token: token });
        }
    })

});

router.post("/resetPassword", (req, res) => {
    let { token, newpassword } = req.body;
    
    if(!token || !newpassword) return res.status(401).json({ msg: "Invalid Reset Token" });

    jwt.verify(token, process.env['JWT_SECRET'], async (error, decoded) => {
        if (error) {
            return res.status(401).json({ msg: "Invalid Reset Token" });
        }
        else {
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(newpassword, saltRounds);
            console.log(decoded.userId, passwordHash, newpassword)
            User.findByIdAndUpdate(decoded.userId, { passwordHash: passwordHash, emailConfirmed: true })
                .then(user => {
                    const newToken = jwt.sign(
                        {
                            userId: user._id,
                            emailConfirmed: true
                        },
                        process.env["JWT_SECRET"],
                        {
                            expiresIn: process.env["TOKEN_EXPIRATION_TIME"]
                        }
                    );
                    return res.json({ user: newToken });
                }   ).catch(error => {
                    return res.status(401).json({ msg: "New Email Save Error!" });
                })

        }
    })

});

router.post("/update_balance",(req,res)=>{
    let {email,balance} = req.body;
    try{
        User.updateOne({email:email},{balance:balance},function(err,res1){
         return res.json({ status: 'ok' });
        })
    }
    catch(err){
        console.log(err)
        return res.json({ status: 'failed' });
    }
       
})

// router.post("/info", (req, res) => {
//     const { language, experience, time, phoneNumber, userId, availableTime, firstName, location, lastName, company } = req.body;
//     User.findById(userId, function (err, user) {
//         if (!user) {
//             Client.findById(userId, function (err, client) {
//                 client.firstName = firstName;
//                 client.lastName = lastName;
//                 client.phoneNumber = phoneNumber
//                 client.company = company
//                 client.location = location.label;
//                 client.save()
//                     .then((client) => res.json("client updated"))
//                     .catch((error) => console.log(error, 'error'))
//                 if (!client) {
//                     res.status(404).send("file is not found");
//                 }
//             })
//         }
//         else {
//             if (user.isInterpreter == "interpreter") {
//                 user.language = language;
//                 user.experience = experience;
//                 user.time = time;
//                 user.phoneNumber = phoneNumber;
//                 user.availableTime = availableTime;
//                 user.location = location.label;
//             }
//             user
//                 .save()
//                 .then((user) => {
//                     res.json("user updated!");
//                 })
//                 .catch((err) => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// })
router.post("/sendcode",(req,res)=>{
    const {email,password,type} = req.body;
    console.log(req.body)
    var code = Math.floor(Math.random() * 10000000) % 1000000 ;
    if(code < 100000) code = code * 10;
    verifycodeList[email] = code;

    try{
                if(type == 'email')
                    {
                        var transporter = nodemailer.createTransport({
                          service: 'gmail',
                          auth: {
                            user: 'veniaminit9@gmail.com',
                            pass: 'xkemqmtklxqirgkz'
                          }
                        });
                        console.log(verifycodeList);
                        var mailOptions = {
                          from: 'veniaminit9@gmail.com',
                          to: email,
                          subject: 'Blackward SignUp Verify Code',
                          html: '<html><p>Verification code is ' +  code + ' </p></html>'
                        };
                          
                        transporter.sendMail(mailOptions, function(error, info){
                          if (error) {
                            console.log(error);
                            res.status(400).json({msg:'failed'});
                          } else {
                            console.log('Email sent: ' + info.response);
                            res.status(400).json({msg:'success'});
                          }
                        });
                    }
                    else{
                        console.log("sending sms code to " + email );
                            client.messages
                                .create({
                                  from: twilioNumber,
                                  to: email,
                                  body: code,
                                })
                                .then((message) => console.log('sms sent: ' + message.sid));
                        }

    }
    catch(err){
        console.log(err)
        res.status(400).json({msg:'failed'});
    }
})
router.post("/verifycode",async (req,res)=>{
 
     const {code,email, password} = req.body;
     if(!code || !email) 
        return res.status(400).json({ msg: "Verify Code is not correct!" });
    // console.log(verifycodeList);
    // console.log(code);  
    if(verifycodeList[email] == '' ){
        return res.status(400).json({ msg: "Verify Code is not correct!" });
    } 
    else{

        if (verifycodeList[email] == code) {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User Already Exists!" });
        }
        console.log("started creating account")
        const saltRounds = 10;
        const isInterpreter = "interpreter"
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const balance = "0"


//------------------------ Generate Algorand account---------------------

        const account = algosdk.generateAccount();
        // console.log("generated new  account")
        const algo_address = account.addr
        const algo_sk = account.sk
        const manager = algosdk.mnemonicToSecretKey(process.env.REACT_APP_MANAGER_KEY)
         // console.log("manager",manager.addr)
         // return;
        try
            {
                
                await transfer(manager.addr,algo_address,manager.sk, 0.303* 1000000)
                console.log("Fee created",algo_address)
                
                await installBRT(algo_address,account.sk)
                console.log("installed brt")

                await installUSDC(algo_address,account.sk)
                console.log("installed usdc")

            }
            catch(err){
                console.log(err)
                   return res.status(400).json({ msg: "Server Error!" });     
            }
        
// ------------------------Generate Ethereum account---------------------------

        const eth_account = EthereumWallet.default.generate();        
        const eth_address = eth_account.getAddressString();
        const eth_data = eth_account.getPrivateKeyString();

//-------------------------Create Account----------------------------------

        const firstName = ''
        const lastName = ''
        const address = ''
        let role = "3"
        const membership = ""
        const allow = '1'
        const phoneNumber = ''
        const company = ''
        const vat = ''
        const postalcode = ''
        const city = ''
        const isBusinessOwner = '0'
        const employeer = ''
        const blockrewardUserName = ''
        const twiterName = ''
        const instagramName = ''
        const businessKey = ''
        const businessType = ''
        const newUser = new User({
            firstName,
            lastName,
            company,
            vat,
            phoneNumber,
            address,
            postalcode,
            city,
            email,
            passwordHash,
            isInterpreter,
            balance,
            algo_address,
            algo_sk,
            eth_address,
            eth_data,
            role,
            membership,
            allow,
            isBusinessOwner,
            businessKey,
            employeer,
            blockrewardUserName,
            twiterName,
            instagramName,
            businessType
        });

        const savedUser = await newUser.save();
        console.log("successed creating account")

        const role_token = jwt.sign(
            {
                userId: savedUser._id,
                role: savedUser.role,
            },
            process.env["JWT_SECRET"],
            {
                expiresIn: process.env["TOKEN_EXPIRATION_TIME"]
            }
        );

        var role_data = '' ;

        for(var i = 0 ;i < role_token.length; i++){
           role_data += role_token[i]
           if(i==10) role_data  += savedUser.role     
        }

        res.send({ user: savedUser.passwordHash,msg:'success',address:algo_address,role : role_data,eth : eth_address, membership: "0" })
        
        }
        else{
               return res.status(400).json({ msg: "Verify Code is not correct!" });     
        }
    }
})
router.post("/create_arc_19",async(req,res)=>{

 const {address,name, unit_name , description, url_p,reserveAddress_p,url_v,reserveAddress_v,algo,eth,usdc,level} = req.body;    
 if(!address) 
    return  res.send({ result: "failed"})
 const users =  await User.find({ algo_address: address })
 
 if(users.length == 0) {
   return  res.send({ result: "failed"})
 }
 else{
    const user = users[0]
    const role = user.role
    const algo_sk = user.algo_sk;
    try{
        await CreateArc19(address,address,name,unit_name,description,url_p,reserveAddress_p,getSecrectKey(algo_sk))    

         const type = name
         const creator = address
         const picture = url_v
         const video = reserveAddress_v  
         const platform_nft = role == 0 ? '1' :'0'      
         const newMembership = new Membership({
                type,
                unit_name,
                description,
                algo,
                eth,
                usdc,
                creator,
                picture,
                video,
                level,
                platform_nft
            });
        newMembership.save()

   }
   catch(err){
    console.log("mint error",err)
    return  res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }
 

})

router.post("/config_arc_19",async(req,res)=>{

 const {address,id,name, unit_name , description, url,reserveAddress} = req.body;    
 if(!address) 
    return    res.send({ result: "failed"})
 
    const users =  await User.find({ algo_address: address })
 
 if(users.length == 0) {
    return    res.send({ result: "failed"})
 }
 
 else{
    const user = users[0]
    const algo_sk = user.algo_sk;
   try{
        await ConfigArc19(address,id,name,unit_name,description,url,reserveAddress,getSecrectKey(algo_sk))    
   }
   catch(err){
    console.log("upgrade error",err)
  return   res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }
})

router.post("/transfer_token",async(req,res)=>{

const {address,receiver,amount} = req.body;    
if(!address)
  return    res.send({ result: "failed"})
    
const users =  await User.find({ algo_address: address })
 if(users.length == 0) {
  return    res.send({ result: "failed"})
 }
 else{
    const user = users[0]
    const algo_sk = user.algo_sk;
   try{
        await transferToken(address,receiver,amount,getSecrectKey(algo_sk))    
   }
   catch(err){
    console.log("transfer BRT token error",err)
  return  res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }

})

router.post("/transfer_algo",async(req,res)=>{

const {address,receiver,amount} = req.body;    
if(!address)
    return  res.send({ result: "failed"})

const users =  await User.find({ algo_address: address })
 if(users.length == 0) {
   return  res.send({ result: "failed"})
 }

 else{
    const user = users[0]
    const algo_sk = user.algo_sk;
   try{
        await transferAlgo(address,receiver,amount,getSecrectKey(algo_sk))    
   }
   catch(err){
    console.log("transfer Algo token error",err)
   return  res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }
})
router.post("/transfer_usdc",async(req,res)=>{

const {address,receiver,amount} = req.body;    
if(!address)
    return  res.send({ result: "failed"})

const users =  await User.find({ algo_address: address })
 if(users.length == 0) {
   return  res.send({ result: "failed"})
 }
 else{
    const user = users[0]
    const algo_sk = user.algo_sk;
   try{
        await transferUSDC(address,receiver,amount,getSecrectKey(algo_sk))    
   }
   catch(err){
    console.log("transfer USDC token error",err)
   return res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }
})

router.post("/get_user_list",async(req,res)=>{

  const users = await  User.find({})
  var result = []
  for(var user of users){
    if(user.role == 0) continue;
    var membership = ''
    if(user.membership != '')
        membership = await getUserMembershipName(user.membership)
    var email = '',phone = '';
    email = user.email
    phone = user.phoneNumber
    const name = user.firstName +' '+ user.lastName
    result.push({id:user._id,name:name,email:email,phone:phone,brt:user.balance,membership:membership,role:user.role}) 
  }
  res.send({result : result})

})

router.post("/update_allow",async(req,res)=>{

   try{

          const {address,id,allowed} = req.body;
          if(!address) 
                  return   res.send({result : 'failed',msg : 'Not Exist User'})

          const user = await User.findOne({algo_address : address})
          if(user.role == 0) {
            
            const client = await  User.findById(id)

            if(!client) {
             return   res.send({result : 'failed',msg : 'Not Exist User'})
            }

            else{
                client.allow = allowed?'1':'0' 
                await client.save()
             return   res.send({result : 'success'})

            }
          }
          else 
            return  res.send({result : 'failed',msg : 'Not Allowed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
  

})


router.post("/update_role",async(req,res)=>{

   try{

          const {address,id,role} = req.body;
          if(!address) 
            return    res.send({result : 'failed',msg : 'Not Exist User'})

          const user = await User.findOne({algo_address : address})
          if(user.role  < 2) {
            
            const client = await  User.findById(id)
            if(!client) {
             return    res.send({result : 'failed',msg : 'Not Exist User'})
            }
            else{
                client.role = role 
                await client.save()

                var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'veniaminit9@gmail.com',
                    pass: 'xkemqmtklxqirgkz'
                          }
                });
                
                var mailOptions = {
                  from: 'veniaminit9@gmail.com',
                  to: client.email,
                  subject: 'Reset Password',
                  html: `<html>
                             Your Business Account is `+ role == '1'? 'allowed' : 'disabled' +`!.<br>
                             Please Logout and Login again.
                         </html>`
                };
                  
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                    // res.status(400).json({status:2,msg:'Error in sending reset email!'});
                  } else {
                    console.log('Email sent: ' + info.response);
                    // res.status(400).json({status:3,msg:'Successfully reset email was sent!'});
                  }
                });
              return  res.send({result : 'success'})
  

            }
          }
          else 
           return   res.send({result : 'failed',msg : 'Not Allowed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
  

})


 async function getUserMembershipName(id){

    const membership_rec = await Membership.findById(id)
          if(!membership_rec) return ''
            else return membership_rec.type
}

router.get("/get", (req, res) => {
    if(!(req.query))
        res.status(404).send("request invalid");

    const userId = req.query.userId;
    User.findById(userId, function (err, user) {
        if (!user) {
            Client.findById(userId, function (err, client) {
                res.send({ data: "client", email: client.email })
                if (!client) {
                    res.status(404).send("user is not found");
                }
            })
        }
        else {
            res.send({ data: "Interpreter", email: user.email })
        }
    })
})

router.get("/clientinfo", (req, res) => {
    Client.find({ isInterpreter: "client" }).then((users) => res.send({ data: users }))
})
router.get("/interpreterinfo", (req, res) => {
    User.find({ isInterpreter: "interpreter" }).then((users) => res.send({ data: users }))
})

router.post("/update_detail_info", async(req, res) => {

const {data,address,isOwner} = req.body
if(!address)
    return res.send({result : 'failed'})

try{
    
    const user = await User.findOne({algo_address : address})
    if(!user) {
        res.send({result : 'failed'})
        return;
    }

    const firstname = data.firstname
    const lastname = data.lastname
    const company = data.company
    const phone = data.phone
    const vat = data.vat
     
    const Address = data.address
    const postalcode = data.postalcode
    const city = data.city
    const key = data.key
    const type = data.type

    user.businessKey = key
    user.firstName = firstname
    user.lastName = lastname
    user.company = company
    user.phoneNumber = phone
    user.vat = vat
    user.address = Address
    user.postalCode = postalcode
    user.city = city

if(isOwner){
    user.isBusinessOwner = '1'    
    user.businessType = type    
    }
else{
    user.isBusinessOwner = '0'    
    user.employeer = data.employeer
}
    const savedUser = await user.save()
    res.send({result : 'success'})

}
catch(err){
    console.log(err)
    res.send({result : 'failed'})
    return;
}

})

router.post("/get_detail_info", async(req, res) => {

const {id,address} = req.body
try{
    if(!address)
        return res.send({result : 'failed'});
    const user = await User.findOne({algo_address : address})
    if(!user) {
        res.send({result : 'failed'})
        return;
    }

    const result = {}
    result['firstname'] = user.firstName    
    result['lastname'] = user.lastName    
    result['company'] = user.company    
    result['vat'] = user.vat    
    result['phone'] = user.phoneNumber    
    result['address'] = user.address    
    result['postalcode'] = user.postalCode    
    result['city'] = user.city    
    result['owner'] = user.isBusinessOwner    
    result ['employeer'] = user.employeer
    result ['type'] = user.businessType
    res.send({result : 'success',data : result})
     
}
catch(err){
    console.log(err)
    res.send({result : 'failed'})
    return;
}

})
router.post("/get_employee_list", async(req, res) => {

const {address} = req.body
if(!address) 
    return res.send({result : 'failed'})

try{

    const user = await User.findOne({algo_address : address})
    if(!user) {
        res.send({result : 'failed'})
        return;
    }else  if(user.isBusinessOwner == 0) {
        res.send({result : 'failed'})
        return;
    }else{

    const employee_list = await User.find({employeer : user._id},{firstName:1,lastName:1,email:1,phoneNumber:1,balance:1,membership:1,role:1})
        res.send({result : 'success',data : employee_list})

    }

}
catch(err){
    console.log(err)
    res.send({result : 'failed'})
    return;
}

})

router.post("/get_user_detail_info", async(req, res) => {
  
  try{

          const {address,id} = req.body;
          if(!address)
            return  res.send({result : 'failed'})
          const user = await User.findOne({algo_address : address})
          if(user.role == 0) {
            
            const client = await  User.findById(id)
            if(!client) {
             return    res.send({result : 'failed',msg : 'Not Exist User'})
            }
            else{
                 const result = {}
                    result['phone'] = client.phoneNumber    
                    result['brt'] = client.balance    
                    var membership = ''
                    if(user.membership != '')
                        membership = await getUserMembershipName(client.membership)
                    result['membership'] = membership   
                    result['role'] = client.role    
                    result['city'] = client.city    
                    result['postalcode'] = client.postalCode    
                    result['address'] = client.address    
                    res.send({result : 'success',data : result})          
            }
          }
          else 
           return   res.send({result : 'failed',msg : 'Not Allowed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }

})
router.post("/get_company_list", async(req, res) => {
  
  try{

       const company_list = await User.find({"company":{$exists:true, "$ne": ""}},{_id : 1, company : 1});
       res.send({result : 'success',data:company_list})
   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }

})
router.post("/get_business_list",async(req,res)=>{

  const users = await  User.find({isBusinessOwner : '1'})
  var result = []
  try{
    for(var user of users){
        if(user.role == 0) continue;
        
        // if(user.company  != '') {
            result.push({id:user._id,owner : (user.firstName + user.lastName),company:user.company,vat : user.vat,address : user.address, role : user.role , path : user.algo_address })
        // }

    }
    res.send({result : result})

  }catch(err){
    console.log(err)
    res.send({result:[]})
  }

})
router.post("/get_profile_info",async(req,res)=>{
  const {address} = req.body
  if(!address) {
    res.send({result : 'failed',msg : 'Server Error'})
  }
  try{
    const user = await  User.findOne({algo_address : address})
    if(user){
        res.send({result : 'success',username:user.blockrewardUserName,twiter : user.twiterName , instagram : user.instagramName})
    }else{    
        res.send({result : 'failed',msg : 'Not Allowed'})
    }

  }catch(err){
    console.log(err);
    res.send({result : 'failed',msg : 'Server Error'})
  }

})


router.post("/create_ticket",async(req,res)=>{

 const {address,name, unit_name , description, url_p,reserveAddress_p,url_v,reserveAddress_v,algo,usdc,brt} = req.body;    
 if(!address)
    return res.send({result : 'failed'})
 const user =  await User.findOne({ algo_address: address })
 
 if(!user) {
   return  res.send({ result: "failed"})
 }
 else{
    const role = user.role
    const algo_sk = user.algo_sk;
    try{
        await CreateArc19(address,address,name,unit_name,description,url_p,reserveAddress_p,getSecrectKey(algo_sk))    

         const picture = url_v
         const video = reserveAddress_v  
         const price = brt
         const creator = address
         const newTicket = new Ticket({
                name,
                unit_name,
                picture,
                creator,
                video,
                price,
                algo,
                usdc,
                description
            });
        newTicket.save()

   }
   catch(err){
    console.log("mint error",err)
   return  res.send({ result: "failed"}) 
   }
   res.send({result:"ok"})    
 }
 
})
router.post('/transfer_eth',async(req,res)=>{

   const {address,receiver,amount} = req.body;
   if(!address){
        return res.send({result : 'failed'})
    }
   const user = await User.findOne({eth_address : address})
   if(!user) return res.send({result : 'failed'})
  try{
    await transferETH(address,user.eth_data,receiver,amount)
    res.send({result : 'success'})
  }catch(err){
      console.log(err)
      res.send({result : 'failed'})
    }

}) 
router.post('/transfer_usdt',async(req,res)=>{

    const {address,receiver,amount} = req.body;
    if(!address){
         return res.send({result : 'failed'})
     }
    const user = await User.findOne({eth_address : address})
    if(!user) return res.send({result : 'failed'})
   try{
     await transferUSDT(address,user.eth_data,receiver,amount)
     res.send({result : 'success'})
   }catch(err){
       console.log(err)
       res.send({result : 'failed'})
     }
})

router.post('/transfer_matic',async(req,res)=>{

    const {address,receiver,amount} = req.body;
    if(!address){
         return res.send({result : 'failed'})
     }
    const user = await User.findOne({eth_address : address})
    if(!user) return res.send({result : 'failed'})
   try{
     await transferMATIC(address,user.eth_data,receiver,amount)
     res.send({result : 'success'})
   }catch(err){
       console.log(err)
       res.send({result : 'failed'})
     }
 
 }) 
 router.post('/transfer_tst',async(req,res)=>{

    const {address,receiver,amount} = req.body;
    if(!address){
         return res.send({result : 'failed'})
     }
    const user = await User.findOne({eth_address : address})
    if(!user) return res.send({result : 'failed'})
   try{
     await transferUSDTForMATIC(address,user.eth_data,receiver,amount)
     res.send({result : 'success'})
   }catch(err){
       console.log(err)
       res.send({result : 'failed'})
     }
 
 }) 
export default router;
