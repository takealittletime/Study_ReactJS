import './List.css'
import TodoItme from './Todoitem';
import { useState } from 'react';

const List = ({todos}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e)=>{
    setSearch(e.target.value);
  };

  const getFilteredData = ()=>{
    // 검색어가 없을 때 -> todos 모두 반환
    if (search == ""){
      return todos;
    }
    // 검색어가 있을 때-> 검색어로 filtering된 결과 반환
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase()));
  }

  const filteredTodos = getFilteredData();

  return (
  <div className="List">
    <h4>Todo List 🌱</h4>
    <input
      value={search}
      onChange={onChangeSearch} 
      placeholder="검색어를 입력하세요"
    />
    <div className='todo_wrapper'>
      {filteredTodos.map((todo)=>{
        return <TodoItme key={todo.id} {...todo}/>;
      })}
    </div>
  </div>
  );
}

export default List;