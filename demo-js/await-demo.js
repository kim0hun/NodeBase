
// async-await : Promise 객체를 좀 더 쉽고 편하게 사용 문법
// 즉, 비동기 처리가 쉽다!

// async 함수
// _____ function f() {} : 일반함수
// async function f() {} : async 함수

// await은 async 함수 안에서만 동작!
// await이.. Promise 객체.then() 이 메소드를 좀 더 쉽게 사용할 수 있는 방법

async function f() {
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>resolve('완료!'), 3000);
    });

    let result = await promise;
    console.log(result);
}

f();