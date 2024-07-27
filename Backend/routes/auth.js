const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); //for hashing
const {getToken} = require("../utils/helpers");
const File = require("../models/File");


router.post(
    "/create", async (req, res) => {
        const { name, track } = req.body;
        if (!name || !track) {
            return res.status(400).json({ err: "Insufficient details to create file." });
        }
        const fileDetails = { name, track };
        const createdFile = await File.create(fileDetails);
        return res.status(200).json(createdFile);
    }
);

router.get("/getUploads", async (req, res) => {
    try {
        // Fetch all uploaded files (documents)
        const files = await File.find(); 
        return res.status(200).json({ data: files }); 
    } catch (error) {
        console.error("Error fetching uploaded files:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


// This POST route will help to register a user
router.post("/register", async (req, res) => {
    // This code is run when the /register api is called as a POST request

    //req or request for the following parameters will be sent: {email, password, firstName, lastName, username }
    const {email, password, firstName, lastName, username} = req.body;

    // Step 2 : Does a user with this email already exist? If yes, we throw an error.
    const user = await User.findOne({email: email});//compares the email from above req.body with the one in the user database/userModel if it exists.
    if (user) {
        // status code by default is 200
        return res
            .status(403)
            .json({error: "A user with this email already exists"});
    }
    // If it's a genuine new user, the following steps take place:
    // Step 3: Create a new user in the DB
    // Step 3.1 : We do not store passwords in plain text so we convert the plain text password to a hash using the bcrypt library.
    const hashedPassword = await bcrypt.hash(password, 10);//passing the password, and the hashing rounds as 10. higher the rounds, more the security but also more demanding.
    const newUserData = { //passing the following parameters to create a new user
        email,
        password: hashedPassword,//sending hash instead of actual password.
        firstName,
        lastName,
        username,
    };
    const newUser = await User.create(newUserData);
    console.log(newUserData);

    // Step 4: We want to create the token to return to the user which will be used for that passport twt(JSON Web Token) authentication.
    const token = await getToken(email, newUser);//this is a common function needed by namy files, so we make this in the utils->helpers.js file.

    // Step 5: Return the result to the user
    const userToReturn = {...newUser.toJSON(), token};
    console.log(userToReturn);
    delete userToReturn.password; // we do not want to return the hash password back. more security.
    return res.status(200).json(userToReturn);
});


/*creating the login route, which enables an existing valid user to login*/
router.post("/login", async (req, res) => {
    // Step 1: Get email and password sent by user from req.body
    const {email, password} = req.body;

    // Step 2: Check if a user with the given email exists. If not, the credentials are invalid.
    const user = await User.findOne({email: email});
    if (!user) {
        return res.status(403).json({err: "Invalid credentials"});
    }

    console.log(user);

    // Step 3: If the user exists, check if the password is correct. If not, the credentials are invalid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form, which we cannot use to get back the password.
    // I cannot do : if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext(password from req.body) to a hashed password(the one in our db) securely.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // This will be true or false.
    if (!isPasswordValid) {
        return res.status(403).json({err: "Invalid credentials"});
    }

    // Step 4: If the credentials are correct, return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password; 
    return res.status(200).json(userToReturn);
});

module.exports = router;
