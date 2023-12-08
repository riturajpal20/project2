const express = require('express');
const router = express.Router();


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`hello world from router.js`);
})

router.post('/register', async (req, res) => {
    const { name, email,password } = req.body; 
    if (!name || !email ||  !password)  {
        return res.status(422).json({ error: "please filled the field properly" });
    }
    
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });

        }
        const user = new User({ name, email, password});  
        const userRegister = await user.save();
        if (userRegister) {
            res.status(201).json({ message: "user register successfully" });
        }
        else {
            res.status(500).json({ error: "Failed to register" });
        }
    }
    catch (err) {
        console.log(err);
    }
 
    
});
router.post('/signin', async(req, res) => {
    // console.log(req.body);
    // res.json({ message: "awesome" });
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill the data" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        if (!userLogin) {
            res.json({ error: "user error" });
            
        }
        else {
             res.json({ message: "user Signin Successfully" });

        }
        // res.json({ message: "user Signin Successfully" });
    }
    catch (err) {  
        console.log(err);
    }
});

module.exports = router;