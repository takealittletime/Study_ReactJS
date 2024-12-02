import { useEffect } from "react";

const Even = () => {
  useEffect(()=>{
    // 언마운트 되는 과정을 아래 코드로 확인할 수 있음.
    // 클린 업, 정리 함수
    return () => {
      console.log("unmount");
    };
  },[])
  return <div>짝수입니다.</div>
}

export default Even;