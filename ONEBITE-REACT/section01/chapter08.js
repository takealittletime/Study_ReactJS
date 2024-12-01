// JavaScript에만 있는 연산자들
// 1. null 병합 연산자
// -> null, undefined가 아닌 값을 찾아내는 연산자 '??'

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

// 실무에서는 이런 식으로 사용
let userName;
let userNickName = "Winterlood";

let displayName = userName??userNickName;

// 2. Typeof 연산자
// 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// console.log(t1);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// -> 조건식을 사용해 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var7 % 2 == 0?"짝":"홀";