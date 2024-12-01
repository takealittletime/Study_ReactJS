// JS의 단락 평가 (Short-circuit Evaluation)
// let varA = false;
// let varB = true;
// AND, OR 연산자에서 앞의 값을 확인하고 바로 결과를 확정지을 수 있으면 더 확인 x
// operator AND
// console.log(varA && varB);

// operator OR
// console.log(varB || varA);

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

// 완전 bool형 true, false말고도 truthy, falsy한 값에도 적용 가능.

function returnFalsy() {
  console.log("Falsy 함수");
  return undefined;
}

function returnTruthy() {
  console.log("Truthy 함수");
  return 10;
}

console.log(returnTruthy() || returnFalsy());

console.log(returnFalsy() && returnTruthy());

// 단락 평가 활용 사례
// person이 truthy한 값일 때 person.name을 출력하는 문장을 아래와 같이 축약 가능
function printNmae(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printNmae();