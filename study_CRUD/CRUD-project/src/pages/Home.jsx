import './Home.css'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const Home = ()=>{
  const nav = useNavigate();

  return (
    <div className="wrapper">
      <div>
        <h1>Home</h1>
      </div>
      <div className="menu-bar">
        <Button
          onClick = {()=>{
            nav(`/login`)
          }
          } 
          text={'로그인'}/>
        <Button text={'회원가입'}/>
      </div>
    </div>
  )
}

export default Home;