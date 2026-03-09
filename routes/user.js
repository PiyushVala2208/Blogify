const express = require("express");
const User = require('../models/user');
const router = express.Router();

// GET Signup Page
router.get('/signup', (req, res) => {
    return res.render("signup");
});

// GET Signin Page
router.get('/signin', (req, res) => {
    return res.render("signin");
});

// POST Signup
router.post('/signup', async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        await User.create({ fullname, email, password });
        return res.redirect("/user/signin");
    } catch (err) {
        return res.render("signup", { error: "Signup failed, try again." });
    }
});

// POST Signin
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token).redirect("/");
    } catch (error) {
        // Sirf error pass kar, baaki middleware sambhaal lega
        return res.render("signin", { error: "Incorrect Email or Password" });
    }
});

// Logout Route
router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
});

module.exports = router;