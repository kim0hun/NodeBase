const obj1 = {};
const obj2 = { message: '안 빔' };
const num = 1;
const str1 = 'one';
const str2 = ''; // 문자열도 객체

console.log(Object.keys(obj1).length === 0, isEmpty(obj1)); // length === 0
console.log(Object.keys(obj2).length === 0, isEmpty(obj2)); // length === 1

console.log(Object.keys(num).length === 0, isEmpty(num));
console.log(Object.keys(str1).length === 0, isEmpty(str1));
console.log(Object.keys(str2).length === 0, isEmpty(str2));

function isEmpty(obj) {
    // if (obj.constructor === Object)
        if (Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
}