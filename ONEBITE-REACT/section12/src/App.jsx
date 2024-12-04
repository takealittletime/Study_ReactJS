import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/Notfound';


// 1. "/": 모든 일기를 조회하는 home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <Routes>
      {/* Routes 컴포넌트 안에는 Route만 넣을 수 있다. */}
      {/* 아래 Route문들 위에 만약 <div>를 추가했다고 한다면, 해당 요소는 모든 페이지에 다 표시된다. */}
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
