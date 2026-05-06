const express = require('express');

const app = express();

function authMiddleware(req, res, next) {

    const auth = req.headers.authorization;

    if (auth === 'admin123') {
        next();
    } else {
        res.status(403).send("Access Denied");
    }
}
app.get('/public', (req, res) => {

    res.send("Public Route");

});

app.get('/private', authMiddleware, (req, res) => {

    res.send("Welcome to private route");

});
app.listen(3000, () => {

    console.log("Server running on port 3000");

});