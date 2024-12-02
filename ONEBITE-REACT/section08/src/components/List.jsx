import './List.css'
import TodoItme from './Todoitem';

const List = () => {
  return (
  <div className="List">
    <h4>Todo List 🌱</h4>
    <input placeholder="검색어를 입력하세요" />
    <div className='todo_wrapper'>
      <TodoItme/>
      <TodoItme/>
      <TodoItme/>
    </div>
  </div>
  );
}

export default List;