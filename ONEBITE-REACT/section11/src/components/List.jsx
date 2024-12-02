import './List.css'
import TodoItem from './Todoitem';
import { useState, useMemo, useContext } from 'react';

import { TodoContext } from '../App';

const List = () => {
  const {todos, onUpdate, onDelete} = useContext(TodoContext);
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

  const getAnalyzedData = ()=>{
    // 이렇게 작성해놓으면, todo 검색하는데도 getAnalyzedData가 계속해서 호출된다! -> 연산 낭비.
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount-doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount-doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos]);
  // 의존성 배열: deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
  <div className="List">
    <h4>Todo List 🌱</h4>
    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>
    <input
      value={search}
      onChange={onChangeSearch} 
      placeholder="검색어를 입력하세요"
    />
    <div className='todo_wrapper'>
      {filteredTodos.map((todo)=>{
        return <TodoItem key={todo.id} {...todo} onUpdate = {onUpdate} onDelete = {onDelete}/>;
      })}
    </div>
  </div>
  );
}

export default List;