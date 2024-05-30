
// async-await : Promise 객체를 좀 더 쉽고 편하게 사용 문법
// 즉, 비동기 처리가 쉽다!

// async 함수
// _____ function f() {} : 일반함수
// async function f() {} : async 함수

// await은 async 함수 안에서만 동작!
// await이.. Promise 객체.then() 이 메소드를 좀 더 쉽게 사용할 수 있는 방법

async function f() {

    // promise 객체 한개당 => query 하나
    let promise1 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('첫번째 쿼리'), 3000);
    });

    let result1 = await promise1;
    console.log(result1);

    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('두번째 쿼리 with ' + result1), 3000);
    });

    let result2 = await promise2;
    console.log(result2);

    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('세번째 쿼리 with ' + result2), 3000);
    });

    let result3 = await promise3;
    console.log(result3);
}

f();