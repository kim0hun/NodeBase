const express = require('express');
const app = express();
app.listen(3000);

const fruits = [
    {id : 1, name : 'fruit'},
    {id : 2, name : 'orange'},
    {id : 3, name : 'strawberry'},
    {id : 4, name : 'blueberry'}
];

app.get('/fruits', (req, res)=>{
    res.json(fruits);
});

app.get('/fruits/:id', (req, res)=>{
    let id = req.params.id;
    // let fruit = fruits[id];
    var findFruit = fruits.find(f => f.id == id);
                // fruits 배열 안에 있는 객체 중, di 값이 params.id랑 같은 객체

    if(findFruit)
        res.json(findFruit);
    else
        res.status(404).send(
            {message : '전달주신 id로 저장된 과일이 없습니다.'}
        );
});