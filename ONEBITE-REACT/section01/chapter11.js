// 함수 선언

function greeting() {
  console.log("Hello");
}

function getArea(width, height){
  // JS는 function 안에 function을 선언할 수 있다.
  function another(){
    console.log("another");
  }

  let area = width * height;

  return area;
}

let area1 = getArea(10,20);
// JavaScript는 호이스팅이라는 기능이 있어서, function의 위치가 상관없음.