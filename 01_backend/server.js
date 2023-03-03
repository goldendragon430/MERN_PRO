import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routers/authRouter.js";
import accountRouter from "./routers/accountRouter.js";
import membershipRouter from "./routers/membershipRouter.js";
import membershipshopRouter from "./routers/membershipShopRouter.js";
import reedmeRouter from "./routers/reedmeRouter.js";
import { Membership } from "./models/membershipModel.js"
import { ReedMe } from "./models/reedmeModel.js"
import fileRouter from "./routers/fileRouter.js"
import ticketRouter from "./routers/ticketRouter.js"
import discountRouter from "./routers/discountRouter.js"
import creditRouter from "./routers/creditRouter.js"
import ticketRedeemRouter from "./routers/ticketRedeemRouter.js"
import claimCodeRouter from "./routers/claimRouter.js"
import path from "path";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name', __filename, __dirname);
// Server Configuration
const app = express();

const PORT = process.env["PORT"] || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: [
            process.env["FRONT_URL"]
        ],
        credentials: true
    })
);


app.use(function (req, res, next) {

    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'EventTracker'

    ) {

        const token = req.headers.authorization.split(' ')[1]

        jwt.verify(token, process.env["JWT_SECRET"], function (err, decode) {
            if (err) req.user = undefined
            req.user = decode
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})
// Mongo Setup
mongoose.connect(
    process.env["MONGO_URI"],
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    async(err) => {
        if (err) console.error(err);
        console.log("Database connected");

    }
);

// Setup Routes
app.use("/auth", authRouter);
app.use("/account", accountRouter);
app.use("/membership", membershipRouter);
app.use("/reedmeservice", reedmeRouter);
app.use("/fileservice",fileRouter);
app.use("/membershipshop",membershipshopRouter);
app.use("/discount",discountRouter);
app.use("/ticket",ticketRouter);
app.use("/ticketRedeem",ticketRedeemRouter);
app.use("/credit",creditRouter);
app.use("/claim",claimCodeRouter);
// Home page
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// Start App
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
});
