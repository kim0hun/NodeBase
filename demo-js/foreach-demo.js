
const arr = [1, 2, 3 ,4, 5];

//�ݹ��Լ��� �ϴ� ��?
// ��ü (�Ǵ� �迭)���� ��Ҹ� �ϳ� ���� ���� �Ҹ��� �ݹ��Լ�
arr.forEach((a, b, c)=>{
    // console.log(`a : ${a}, b : ${b}, c : ${c}`);
});

let map = new Map();
map.set(7, 'seven');
map.set(9, 'nine');
map.set(8, 'eight');

map.forEach((a, b, c)=>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`);
})