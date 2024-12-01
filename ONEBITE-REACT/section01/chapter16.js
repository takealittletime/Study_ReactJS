// 1. 상수 객체 (객체를 상수로 선언)
const animal = {
  type: "고양이",
  name: "나비",
  color: "black"
};

// 객체의 프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

// 아예 값을 바꿔버리는건 불가능
// animal = 2;

// 2. 메서드 -> 값이 '함수'인 프로퍼티
const person = {
  name: "최민규",
  // 메서드
  sayHi() {
    console.log("안녕!");
  },
}