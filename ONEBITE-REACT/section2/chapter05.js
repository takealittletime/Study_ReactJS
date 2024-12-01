// 원시타입 vs 객체타입
// 값이 저장되거나, 복사되는 과정이 서로 다르기 때문.

// 원시타입: Number, String, Boolean 등 -> '값 자체'로써 변수에 저장되고 복사 (Call By Value)
// 객체 타입: Object, Array, Function 등 -> '참조값'을 통해 변수에 저장되고 복사 (Call By Reference)

// 객체 타입에서 원하지 않는 값의 변경을 막으려면 -> 아래처럼 Spread 연산자를 통해 값을 복사 (='깊은 복사'라고 함)
let o1 = {name:'최민규'};
let o2 = {...o1};

// 주의-> 객체 간 비교는 기본적으로 '참조값'을 기준으로 이루어진다.
// ex) 아래와 같은 출력문은 false가 나온다. (참조값이 다르므로)
console.log(o1==o2);
// 아래처럼 JSON.stringify()를 통해 문자열로 변환해 비교 (깊은 비교)
console.log(JSON.stringify(o1) == JSON.stringify(o2));