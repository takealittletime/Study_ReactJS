export const getStringedDate = (targetDate) =>{
  // 날짜 객체 문자열로 parsing-> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10){
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};