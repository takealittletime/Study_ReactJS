import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log(`count: ${count}, input: ${input}`);
  }, [count, input])
  // 의존성 배열
  // dependency array
  // deps
  
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
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
}

export default App
