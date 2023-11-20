const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


async function userLogin(req, res) {
    //Accepts email and password and responds with a jwt token on successful login
    const { email, password } = req.body;

    if (!email) {
        res.json({
            status: false,
            msg: "Enter the email"
        });
        return;
    }
    if (!password) {
        res.json({
            status: false,
            msg: "Enter the password"
        });
        return;
    }
    console.log(email);
    const user = await userModel.findOne({ "email": email });
    if (!user) {
        res.json({
            status: false,
            msg: "email doesnt exist"
        });
        return;
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        {
            res.json({
                status: false,
                msg: "Invalid password"
            });
            return;
        }
    }

    res.set("x-jwtoken", jwt.sign({ id: user._id }, "pkey"))
    res.json({
        status: true,
        msg: "Login sucess",
    });
    return;
}

async function userRegister(req, res) {
    //Registers the user aka add the user to database after encrypting the password
    var { fname, lname, email, password } = req.body;
    if (!fname) {
        res.json({
            status: false,
            msg: "Enter the first name"
        });
        return;
    }
    if (!lname) {
        res.json({
            status: false,
            msg: "Enter the last name"
        });
        return;
    }
    if (!email) {
        res.json({
            status: false,
            msg: "Enter the email"
        });
        return;
    }
    if (!password) {
        res.json({
            status: false,
            msg: "Enter the password"
        });
        return;
    }
    const user = await userModel.findOne({ "email": email });
    if (user) {
        res.json({
            status: false,
            msg: "Email id already exists"
        });
        return;
    }

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);


    console.log(password);
    const newUser = new userModel({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
    await newUser.save();

    res.json({
        status: true,
        msg: "User created"
    });

}

module.exports = { userLogin, userRegister };