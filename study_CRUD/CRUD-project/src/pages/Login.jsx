import './Login.css'
import Button from "../components/Button";

const Login = ()=>{
  return (
    <div className="Login">
      
      <h1>Login</h1>

      <div className="LoginForm">
        
        <label htmlFor="idIp">아이디</label>
        <input id="idIp"
        type="text" placeholder="ID"></input>

        <label htmlFor="pwIp">비밀번호</label>
        <input id="pwIp"
        type="password" placeholder="PW"></input>

        <Button text={'로그인'}/>
      
      </div>
    </div>
  )
}

export default Login;