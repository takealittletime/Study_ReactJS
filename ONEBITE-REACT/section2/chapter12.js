// function add(a,b, callback) {
//   setTimeout(()=>{
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value)=>{
//   console.log(value);
// })

// 비동기 처리의 실제 사용
// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(()=>{
    const food = "떡볶이";
    callback(food);
  },2000);
}

function cooldownFood(food, callback) {
  setTimeout(()=>{
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1000);
};

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 500);
}

// callback 지옥 -> promise가 필요해짐.
orderFood((food)=>{
  console.log(food);
  cooldownFood(food, (cooldownedFood)=>{
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood)=> {
      console.log(freezedFood);
    });
  });
});