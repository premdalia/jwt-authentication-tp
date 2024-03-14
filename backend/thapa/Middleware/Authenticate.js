const jwt = require("jsonwebtoken");
const User = require("../userSchema");

const Authenticate = async (req, res, next) => {
    try {
        console.log(`i m authenticate`);
        const token = req.cookies.token;
        console.log(token);
        if (!token) {
            throw new Error("Token not found");
        }
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifytoken);
        const rootUser = await User.findOne({ _id: verifytoken._id });

        req.user = rootUser;
        next();
    } catch (err) {
        res.status(401).send("Unauthorized"); // Change status code to 401 for unauthorized
        console.error(err);
    }
};

module.exports = Authenticate;
