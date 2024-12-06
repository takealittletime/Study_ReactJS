import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return (
    <div>
      <h1>수정 페이지:: {params.id}번 일기입니다.</h1>
    </div>
  )
}

export default Edit;