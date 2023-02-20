// 자바스크립트는 모든 숫자의 형태를 허용

// 어떠한 형태이든 10진수형태로 출력함

// 값이 무한인 경우 Infinity 출력
let IsInfinitiy = 10 / 0;
// 값이 말이 안되는 경우 Not a Number 출력
let IsNaN       = 10 / "칠";

console.log(IsInfinitiy, IsNaN);


// 0.30000000000000004 출력
let sum = 0.1 + 0.2;
console.log(sum);