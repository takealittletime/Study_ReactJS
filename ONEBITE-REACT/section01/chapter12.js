function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA);

// 1. 함수 표현식 (이렇게 함수 표현식으로 만든 함수들은 호이스팅의 대상이 되지 않는다!)
let varB = function () {
  console.log("funcB");
}

// varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
}
// 어차피 값을 반환하는 것뿐이라면, 아래와 같이 더 간단하게도 나타낼 수 있음.
let varD = () => 1;

// console.log(varC());
console.log(varD());

let varE = (value) => value + 1;
let varF = (value) => {
  console.log("test");
  return value + 3;
}

console.log(varE(10))
console.log(varF(20))