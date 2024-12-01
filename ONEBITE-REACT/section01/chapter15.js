// 객체 -> 여러가지 값을 동시에 저장할 수 있는 자료형.
// 1. 객체 생성
let obj1 = new Object() // 객체 생성자 이용해서 선언하는 방법.
let obh2 = {} // 객체 리터럴 방법을 이용해 선언하는 방법. (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) (key:value) 형식.
let person = {
  name: "최민규",
  age: 25,
  hobby: "보디빌딩",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
console.log(name);

// 없는 property에 접근하려고 하면 undefined 출력
console.log(person.name2);

let age = person['age']; //괄호 표기법 (괄호 안에 들어가는 문자열을 따로 선언해 사용하면 동적으로 이용 가능)
console.log(age);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "FE Developer"

console.log(person)

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법 (delete 연산자)
delete person.job; //점 표기법 뿐만 아니라, 괄호 표기법으로도 삭제 가능
delete person["hobby"];

// 3-5. 프로퍼티의 존재 유무 확인 (in 연산자 이용)
let result1 = "name" in person;
let result2 = "job" in person;

console.log(result1);
console.log(result2);