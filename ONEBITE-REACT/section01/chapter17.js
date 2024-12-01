// 배열 -> 여러 개의 값을 순차적으로 담을 수 있는 자료형.
// 1. 배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴

let arrC = [
  1,
  2,
  3,
  true,
  "hello",
  undefined,
  () => {console.log("test");},
]; //선언과 동시에 초기화 가능
console.log(arrC);