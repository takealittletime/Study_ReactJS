import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useState } from 'react';

function App() {
  // useState를 통해 state 생성. count = 0으로 초기화.
  const [count,setCount] = useState(0);

  const onClickButton = (value) => {
    setCount (count + value);
  }

  return (
    <div className='App'>
    <h1>Simple Counter</h1>
      <section>
        {/* Count prop으로 count state를 전달 */}
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
}

export default App
