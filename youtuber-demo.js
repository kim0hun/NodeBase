// express ��� ����
const express = require('express');
const app = express();
app.listen(3000);

// ������ ����
let youtuber1 = {
    channelTitle: "�ʿ���",
    sub: "593����",
    videoNum: "993��"
}

let youtuber2 = {
    channelTitle: "ħ����",
    sub: "227����",
    videoNum: "6.6õ��"
}

let youtuber3 = {
    channelTitle: "�׿�",
    sub: "54.8����",
    videoNum: "726��"
}

let db = new Map();
var id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

// REST API ����

app.get('/youtubers', (req, res) => {
    // res.json(Object.fromEntries(db));

    var youtubers = {};
    db.forEach(function (value, key) {
        youtubers[key] = value;
    });

    res.json(youtubers);

});

app.get('/youtubers/:id', (req, res) => {
    let id = parseInt(req.params.id);

    const youtuber = db.get(id);
    if (youtuber) {
        res.json(youtuber);
    } else {
        res.json({
            message: "��Ʃ�� ������ ã�� �� �����ϴ�."
        });
    }
});

app.use(express.json());
app.post('/youtubers', (req, res) => {
    console.log(req.body);

    db.set(id++, req.body);

    res.json({
        message: `${db.get(id - 1).channelTitle}��, ��Ʃ�� ��Ȱ�� �����մϴ�!`
    });
});

app.delete('/youtubers', (req, res) => {
    var msg = '';
    if (db.size) {
        db.clear();
        msg = '��ü ��Ʃ���� �����Ǿ����ϴ�.'
    } else {
        msg = '������ ��Ʃ���� �����ϴ�.'
    }
    res.json({ message: msg });
});

app.delete('/youtubers/:id', (req, res) => {
    let id = parseInt(req.params.id);

    var youtuber = db.get(id);
    if (youtuber) {
        const channelTitle = youtuber.channelTitle;
        db.delete(id);
        res.json({
            message: `${channelTitle}��, �ƽ����� �츮 �ο��� ������� �ΰ���...`
        });
    } else {
        res.json({
            message: `��û�Ͻ�${d}���� ���� ��Ʃ���Դϴ�.`
        });
    }
});

app.put('/youtubers/:id', (req, res) => {
    let id = parseInt(req.params.id);
    var youtuber = db.get(id);
    var oldTitle = youtuber.channelTitle;
    if (youtuber === undefined) {
        res.json({
            message: `��û�Ͻ�${d}���� ���� ��Ʃ���Դϴ�.`
        });
    } else {
        youtuber.channelTitle = req.body.channelTitle;
        db.set(id, youtuber);

        res.json({
            message: `${oldTitle}��, ä�θ��� ${youtuber.channelTitle}�� �����Ǿ����ϴ�.`
        });
    }
});