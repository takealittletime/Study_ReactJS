import { useEffect } from "react";

const usePageTitle = (title)=>{
  useEffect(()=>{
    // JS에서는 DOM객체를 변수로 받을 때 관례상 $를 붙인다.
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = title;
  },[title]);
};

export default usePageTitle;