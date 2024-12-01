// Promise란?
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise의 3가지 상태 -> Pending(대기), Fulfilled(성공), Rejected(실패)
function add10(num) {
  const promise = new Promise((resolve, reject)=>{
    // 비동기 작업 실행하는 함수 'executor'
    setTimeout(()=>{
      // const num = 10;
      // const num = null;
  
      if (typeof num == 'number'){
        resolve(num + 10);
      }
      else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  return newP;
}).then((result) => {
  console.log(result);
});