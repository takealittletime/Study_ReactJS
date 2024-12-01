// 1. 콜백 함수: 자신이 아닌 다른 함수에 인수로써 전달된 함수
function main(value) {
  console.log("start");
  value();
  console.log("end");
}

function sub() {
  console.log("sub");
}

// main 함수에 호출된 sub함수가 콜백 함수.
// call back: 나중에, 뒷전에 실행되는 ~
main(sub);


// 아래처럼 함수 표현식을 활용 -> 선언문 자체를 main 함수 안으로 넣어 쓸 수 있음
main(function sub () {
  console.log("i am sub1");
});

main(function () {
  console.log("i am sub2");
});

main(()=> {console.log("i am sub3")});

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++){
    callback(idx);
  }
}
// 아래와 같이 작성하면 거의 구조가 비슷한 함수를 여러번 정의해야 한다!
// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++){
//     console.log(idx * 2);
//   }
// }

// 출력할 때 아래와 같이 콜백 함수를 만들어 전달 해주면 하나의 함수로도 여러 형식의 출력이 가능!
repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
// repeatDouble(5);