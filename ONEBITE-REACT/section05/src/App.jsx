import './App.css'
import Header  from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

// ReactJS를 이용하면 JS를 이용해 HTML 요소들을 반환 가능.
// 이를 '컴포넌트'리고 부르며, 이 컴포넌트의 이름은 보통 함수의 이름을 기준으로 함. -> 첫 글자를 항상 대문자로!
// 함수 선언식이나 화살표 함수를 이용해서 만들 수 있음.

function App() {

  const buttonProps = {
    text:"메일",
    color:"red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
    {/* 컴포넌트의 계층구조: 현재 App()이 부모, Header()가 자식. */}
    {/* <Header />
    <Main />
    <Footer /> */}
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  )
}

export default App
