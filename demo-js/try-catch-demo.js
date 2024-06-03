let string = '{ "num1" : 1';

try{
    let json = JSON.parse(string);
    // console.log(json);

    if(!json.name){
        console.log('입력 값에 이름이 없습니다.');
        throw new SyntaxError();
    }else{
        console.log(json.name);
    }
    
} catch (err){
    console.log(err.name);
    console.log(err.message);
}