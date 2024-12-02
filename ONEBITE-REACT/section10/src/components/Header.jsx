import './Header.css';
import { memo } from "react"

const Header = () => {
  return (
    <div className='Header'>
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>)
}

// Header의 props가 변경되지 않았을 때, 리렌더링 x
export default memo(Header);
// export default Header;