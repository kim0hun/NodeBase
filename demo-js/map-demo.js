
const arr = [1, 2, 3 ,4, 5];

//�ݹ��Լ��� �ϴ� ��?
// ��ü (�Ǵ� �迭)���� ��Ҹ� �ϳ� ���� ���� �Ҹ��� �ݹ��Լ�
const foreachArr = arr.forEach((a, b, c)=>{
    return a*2;
});

const mapArr = arr.map((a, b, c)=>{
    return a*2;
});

console.log(`foreach�� return�ϸ� ${foreachArr}, map���� return�ϸ� ${mapArr}`)