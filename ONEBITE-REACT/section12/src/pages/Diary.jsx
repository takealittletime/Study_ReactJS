import { useParams } from "react-router-dom";

const Diary= ()=> {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>다이어리 페이지::{params.id}번 일기입니다!</h1>
    </div>
  )
};

export default Diary;