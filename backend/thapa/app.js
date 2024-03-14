const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const Authenticate = require("./Middleware/Authenticate");

const app = express();
const dotenv = require("dotenv");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "./.env" });
PORT = process.env.PORT;
// const user=require("./userSchema")
mongoose.connect(process.env.MONGO).then(() => {
    console.log(`${PORT} Port.`);
    app.listen(PORT, (req, res) => {
        console.log(`connected with db..`);
    });
});

// const user=require("./userSchema");
const Product = require("./userSchema");

const middleware = (req, res, next) => {
    console.log(`i m middleware..`);
    next();
};

// app.get("/", (req, res) => {
//     // let token;
//     const token = req.cookies.token;
//     res.send("Hello World!");
//     console.log(token);
// })

// app.get("/sec", middleware, (req, res) => {
//     res.send("Hello World sec!");
//     console.log(`i m sec`);
// })

app.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(500).json({ error: "plz fill all" });
    }

    try {
        const userexist = await Product.findOne({ email: email });
        if (userexist) {
            // console.log(`m before userexists`)
            // console.log(userexist)
            return res.status(500).json({ error: "already exists user" });
        } else if (password != cpassword) {
            return res.status(500).json({ error: "no match pass" });
        } else {
            const user = new Product({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            });
            //middleware bcrypt
            const userregister = await user.save();
            console.log(userregister);
            // res.status(200).json({message:` registered`})
            if (userregister) {
                res.status(200).json({ message: "successfully stored.." });
                console.log(`stored..`);
            } else {
                res.status(500).json({ error: "Failed to Store.." });
            }
        }
    } catch (err) {
        console.log(err);
    }

    // app.post("/register",  (req, res) => {

    //     const { name, email, phone, work, password, cpassword } = req.body;
    //     if (!name || !email || !phone || !work || !password || !cpassword) {
    //         return res.status(500).json({ error: "plz fill all" });
    //     }

    //     Product.findOne({ email: email })
    //     .then(userexist => {
    //         if (userexist) {
    //             return res.status(500).json({ error: "already exists user" })
    //         }
    //         const user = new Product({name, email, phone, work, password, cpassword});
    //         user.save().then(() => {
    //             res.status(201).json({ message: "successfully stored.." });

    //         }).catch((err) => {
    //             res.status(500).json({ error: "Failed to Store.." });
    //         })
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // try {
    //     const newUser = await Product.create(req.body);
    //     console.log(newUser);
    //     res.json(newUser);
    //     res.send("Hello World!");
    // }
    // catch (err) {
    //     res.json({ message: err.message });
    // }
});

app.post("/", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).json({ message: "plz fill details" });
        }

        const userlogin = await Product.findOne({ email: email });
        if (userlogin) {
            const ismatch = await bcrypt.compare(password, userlogin.password);
            // console.log(token);
            if (!ismatch) {
                res.status(500).json({ message: "no valid" });
            } else {
                token = await userlogin.generateAuthToken();

                // console.log(userlogin);
                res.cookie("token", token, {
                    expires: new Date(Date.now() + 300000000),
                    httpOnly: true,
                });

                console.log("cookie set");
                // console.log(token)

                res.status(200).json({ message: "signin successfully", token, user : userlogin });
            }
        } else {
            res.status(500).json({ message: `no user found` });
            console.log(`not have user`);
        }
    } catch (err) {
        console.log(err);
    }
});
// app.post("/logout", (req, res) => {
//     // Delete the token cookie
//     res.clearCookie('token');
//     res.status(500).json({ message: "Logged out successfully" });
//   });

app.post("/logout", async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie("token");
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/home", Authenticate, (req, res) => {
    console.log("in home");

    res.status(200).json({ user: req.user, msg: "home" });
});

app.get("/contact", Authenticate, (req, res) => {
    console.log("in contact");

    res.status(200).json({ user: req.user, msg: "contact" });
});

app.get("/about", Authenticate, (req, res) => {
    console.log("in about");

    res.status(200).json({ user: req.user, msg: "about" });
});

// app.listen(PORT,(req,res)=>{
//     console.log(`${PORT} Port.`);
// })
