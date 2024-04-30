
const arr = [1, 2, 3 ,4, 5];

//콜백함수가 하는 일?
// 객체 (또는 배열)에섯 요소를 하나 꺼낸 다음 불리는 콜백함수
const foreachArr = arr.forEach((a, b, c)=>{
    return a*2;
});

const mapArr = arr.map((a, b, c)=>{
    return a*2;
});

console.log(`foreach로 return하면 ${foreachArr}, map으로 return하면 ${mapArr}`)