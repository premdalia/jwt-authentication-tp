const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: {

        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    }
})



//hashing password

userSchema.pre('save', async function (next) {
    console.log(`m bcrypt`)
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.password, 12);
    }
    next();
});

//generating token
// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error)
//     }
// }


// const jwt = require('jsonwebtoken');



userSchema.methods.generateAuthToken = async function () {
    try {
        // Set the expiration time for the token (e.g., 30 days)
        const expiresIn = '30d';

        // Sign the token with expiration time
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn });

        // Concatenate the new token to the tokens array
        // this.tokens = this.tokens.concat({ token });

        // Save the user document with the updated tokens array
        // await this.save();

        // Return the generated token
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to generate token');
    }
};

const user = mongoose.model("thapa", userSchema);
module.exports = user;


// { expiresIn: '20s' }