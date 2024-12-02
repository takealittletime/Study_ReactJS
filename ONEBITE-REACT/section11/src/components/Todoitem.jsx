import './Todoitem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({
  id, 
  isDone, 
  content, 
  date, })=> {

  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = ()=>{
    onDelete(id);
  }

  return (
    <div className='TodoItem'>
      <input
        onChange={onChangeCheckbox} 
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date (date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트 (HDC)
// export default memo(TodoItme, (prevProps, nextProps)=>{
//   // memo()는 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 반환
//   // T -> Props 바뀌지 않음 -> 리렌더링 x
//   // F -> Props 바뀜 -> 리렌더링 o

//   if (prevProps.id != nextProps.id) return false;
//   if (prevProps.isDone != nextProps.isDone) return false;
//   if (prevProps.content != nextProps.content) return false;
//   if (prevProps.date != nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);