const fruits = ['리치', '두리안', '라즈베리', '블루베리'];
console.log(fruits);

console.log(fruits[0]); // 리치
console.log(fruits[1]); // 두리안
console.log(fruits[2]); // 라즈베리
console.log(fruits[3]); // 블루베리

fruits.push('망고스틴'); // 추가 
console.log(fruits);  

fruits.pop(); // 제거
console.log(fruits);

fruits.forEach(function(fruit, index) {
    console.log(index + '번째 과일', fruit);
});

    