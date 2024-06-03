const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

app.listen(3000);

app.get('/jwt', function (req, res) {

    let token = jwt.sign({
        token : 'token'
    }, process.env.PK);

    res.cookie('jwt', token, {
        httpOnly: true
    });

    res.send('토큰 발행 완료');
});

app.get('/jwt/decoded', function (req, res) {
    
});