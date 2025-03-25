import MainButton from './MainButton'
import './App.css'
import { useState } from 'react'

const TodoListApp = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function addTask() {
    if ((task === "") || (list.length > 7)) return;
    setList([...list, {text: task, completed: false}]);
    setTask('')
  }

  function isCompletedTask(index) {
    const newList = list.map((item, i) => {
      return i === index ? {...item, completed: !item.completed} : item
    });
    setList(newList)
  }

  function removeTask(index) {
    setList(list.filter((_, i) => {
      return i !== index
    }))
  }

  return (
    <div className="container">
      <div className="box-todo">
        <div className="title">
          <h1>To Do List</h1>
          <div>
            <input placeholder='Masukkan task' type="text" onChange={(e) => setTask(e.target.value)}/>
            <MainButton backgroundColor="#E0C234" borderRadius="0 0.5rem 0.5rem 0" color="#000" text="Add Task" handleTask={addTask}/>
          </div>
        </div>
        <div className="content">
          <ul>
            {list.map((item, index) => (
              <li 
              key={index}
              >
                <span className={item.completed ? 'completed' : ''} onClick={() => isCompletedTask(index)}>{item.text}</span>
                <MainButton borderRadius="0.5rem" backgroundColor="#E04FC2" color="#F5F5F5" text="X" handleTask={() => removeTask(index)}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoListApp