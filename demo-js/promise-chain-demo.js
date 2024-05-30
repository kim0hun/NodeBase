// 비동기 처리 'Promise (chaining)'
let promise = new Promise(function(resolve, reject){
    setTimeout(()=> resolve('완료'), 3000);
}).then(
    function(result){
        console.log(result);
        return result + '!!!!!';
    },
    function(error){}
).then(
    function(result){
        console.log(result);
        return result + '!!!!!';
    },
    function(err0r){}
).then(
    function(result){
        console.log(result);
        return result;
    },
    function(error){}
)
