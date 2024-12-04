import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home"
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/Notfound';

import emotion1 from "./assets/emotion1.png"
import emotion2 from "./assets/emotion2.png"
import emotion3 from "./assets/emotion3.png"
import emotion4 from "./assets/emotion4.png"
import emotion5 from "./assets/emotion5.png"


// 1. "/": 모든 일기를 조회하는 home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
      <div>
        <h1>아래는 public 폴더에서 가져온 이미지</h1>
        <img src={'/emotion1.png'}/>
        <img src={'/emotion2.png'}/>
        <img src={'/emotion3.png'}/>
        <img src={'/emotion4.png'}/>
        <img src={'/emotion5.png'}/>
      </div>
      <div>
        <h1>아래는 assets 폴더에서 가져온 이미지</h1>
        {/* assets 폴더에 넣어서 data uri를 통해 최적화하는 기능(vite가 제공)을 사용하는 것이 좋다 */}
        <img src={emotion1}/>
        <img src={emotion2}/>
        <img src={emotion3}/>
        <img src={emotion4}/>
        <img src={emotion5}/>
      </div>
      <div>
        <Link to = {"/"}>Home</Link>
        <Link to = {"/new"}>New</Link>
        <Link to = {"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 가기</button>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
    
  )
}

export default App
