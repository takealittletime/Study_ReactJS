// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 해 새로운 배열로 반환
let arr1 = [
  {name: '최민규', hobby: '보디빌딩'},
  {name: '홍길동', hobby: '보디빌딩'},
  {name: '황철순', hobby: '십자수'},
]

const bodybuildingPeople = arr1.filter((item)=>
  (item.hobby == '보디빌딩')
);

console.log(bodybuildingPeople);

// 2. map
// 배열의 모든 요소를 순회 -> 각각 콜백함수를 실행하고 그 결괏값들을 모아 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr) => {
  return item * 2;
});

console.group(mapResult1);

let names = arr1.map((item)=> item.name);
console.log(names);

// 3. sort
// 배열을 '사전' 순으로 정렬
let arr3 = ['b','a','c'];
arr3.sort();

console.log(arr3);

// 만약 배열 안의 값이 숫자라면?
// 오름차순으로 정렬하고 싶다면 아래와 같이.
let arr4 = [10,3,5];
arr4.sort((a,b)=>{
  if (a>b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b){
    // a가 b 앞에 와라
    return -1;
  }
  else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr4);

// 4. toSorted
// sort는 원본 배열 자체를 정렬. toSorted는 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['c','a','b'];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi","im","ChoiMinKyu"];
const joined = arr6.join('\n');
console.log(joined);