// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드 
// (=함수가 프로미스를 반환하도록 해주는 키워드.)
// 함수 내에서 이미 promise를 반환하고 있다면 아무 기능 하지 않음.

async function getData() {
  return {
    name: "최민규",
    id: "@takealittle.time",
  };
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();