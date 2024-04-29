const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.post('/test', (req, res)=>{
    console.log(req.body.message);
    // res.json(req.body);
    res.json(req.body);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});