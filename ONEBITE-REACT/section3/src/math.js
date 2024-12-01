// math 모듈
export function add(a,b) {
  return a+b;
}

export function sub(a,b) {
  return a-b;
}

export default function multiply(a,b) {
  return a*b;
}

// math 모듈로부터 add와 sub를 내보내기
// CJS 방식
// module.exports = {
//   add,
//   sub,
// };
// ESM 방식
// export {add,sub};