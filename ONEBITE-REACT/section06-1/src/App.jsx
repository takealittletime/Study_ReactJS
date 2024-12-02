import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 화면이 마운트 되었는지를 나타낼 플래그 Ref.
  const isMount = useRef(false);

  // LifeCycle
  // 1. 마운트: 탄생
  // deps에 빈 배열을 전달하면 아래 콜백 함수는 마운트 시에만 동작
  useEffect(()=>{
    console.log("mount");
  },[])

  // 2. 업데이트: 변화, 리렌더링
  // deps 자체를 지워버리면 update시 마다
  useEffect(()=>{
    // 마운트 시에는 아래와 같이 ref 변수만 바꿈.
    if (!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. 언마운트: 죽음

  
  const onClickButton = (value) => {
    // React에서 state를 업데이트하는 처리는 비동기로 수행되기 때문에, 해당 동작 이후 처리를 원한다면 useEffect를 이용해주어야.
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value = {input} onChange={(e)=>{setInput(e.target.value)}}/>
      </section>

      <section>
        <Viewer count = {count} />
        {count % 2 == 0? <Even/>:null}
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
}

export default App
