// 1. 배열 순회
let arr = [1,2,3];

// 1-1. 배열의 인덱스를 이용
// arr.length는 arr의 property. (Array도 객체이므로 property를 가진다.)
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// 1-2. for of 반복문
for(let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "최민규",
  age: 25,
  hobby:"bodybuilding",
};

// 2-1. Object.keys 사용
// -> 객체에서 key값들만 뽑아 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys) {
  const value = person[key];
  console.log(key,value);
}

// 2-2. Object.values 사용
let values = Object.values(person);

for (let value of values){
  console.log(value);
}

// 2-3. for in
for (let key in person) {
  const value = person[key];
  console.log(key,value);
}

// for in은 객체에, for of 는 배열에 이용하는데 이게 헷갈린다면 객체에서 in 연산자를 사용한다는 것을 기억하라,