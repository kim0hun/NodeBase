const express = require('express');
const app = express();

app.get('/products/:n', function(req, res){
    // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
    
    let number = parseInt(req.params.n) - 10;
    if(number> 5){
        console.log()
        console.log('url로 전달받은 숫자가 10보다 크네요.');
    }

    res.json({number});

});

// app.get('/:nickname', function(req, res){

//     const param = req.params;

//     res.json({
//         channel : param.nickname
//     });
// });

// 영상 클릭 주소 : https://www.youtube.com/watch?v=BmC1cmItiGs
// 영상 클릭 주소 : https://www.youtube.com/watch?v=8owfdWSyKb4
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=KMhf4ex3d-E&t=291s

app.get('/watch', function(req, res) {
    const {v, t} = req.query;
    console.log(v);
    console.log(t);

    res.json({
        video : v,
        timeline : t
    });
});


app.listen(3000);