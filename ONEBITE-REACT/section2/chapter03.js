// 구조 분해 할당
// 1. 배열의 구조 분해 할당
let arr = [1,2,3];
let [one, two, three] = arr;

// 2. 객체의 구조 분해 할당 - 객체는 구조 분해 할당할 때 중괄호{}를 이용!
let person = {
  name: "최민규",
  age: 25,
  hobby: "bodybuilding",
};

let {
  name : myName, //이렇게 하면 name의 값을 'myName'이라는 변수에 할당 가능
  age,
  hobby
  } = person;

person2 = 1
// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
  console.log(name,age,hobby, extra);
}

func(person2 && person);