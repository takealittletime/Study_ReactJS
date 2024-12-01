// 동기와 비동기
console.log(1);

// 비동기적으로 3000ms 뒤에 실행되는 콜백함수
// Web APIs라는 공간으로 넘어가 실행됨
setTimeout(()=>{
  console.log(2);
}, 3000);

console.log(3);