// #03  변수 var, let, const

// 암시적 선언 :
// 자바스크립트에서 제공하고 있는 변수 선언키워드인
// var, let const키워드를 사용하지 않고 사용하는것
// 명시적 선언 >>
// var : 변수의 중복선언가능
var num = 3;
console.log(num);
// let : 변수의 중복선언 x (권장)
let str = 'a';
console.log(str);
// const : 변수의 중복선언 x, 변수 값 변경불가
// => 상수 선언이라고 한다.
const constant = 10;
console.log(constant);

// 변수 이름은 카멜케이스
// 상수 or 축약어는 대문자와 스네이크케이스
