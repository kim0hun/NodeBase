const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

app.listen(3000);

app.get('/jwt', function (req, res) {

    // let token = jwt.sign({
    //     study : 'express'
    // }, process.env.PK);

    const token = jwt.sign({
        username : 'kim younghun'
    }, process.env.PK, {
        expiresIn: '1m',
        issuer: 'admin'
    });
    
    // console.log(token);

    res.cookie('jwt', token, {
        httpOnly: true
    });

    res.send('토큰 발행 완료');
});

app.get('/jwt/decoded', function (req, res) {
    
    if(jwt.TokenExpiredError){
        return res.send('유효기간 만료');
    }

    const token = req.headers.authorization;
    let decoded = jwt.verify(token, process.env.PK);

    /*
    유효기간이 지났어!
    500 에러(가 난다고 해서 서버가 꺼지진 않았지만) 낼 게 아니고
    예외(개발자가 생각하지 못한 에러) 처리
    - 유효기간이 지난 토큰 => res. '로그인(인증) 세션(유지되는 상태)이 만료되었습니다. 다시 로그인하세요.
    */

    res.send(decoded);
});