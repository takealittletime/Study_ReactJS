// 모듈로부터 값 가져오기
// CJS 방식
// const {add, sub} = require("./math");
// ESM 방식
import mul, {add, sub} from "./math.js"
// import mul from "./math.js"
// import {add, sub} from "./math.js"
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));