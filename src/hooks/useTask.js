import { useState } from 'react'

export const useTask = () => {
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

  return {list, setTask, addTask, isCompletedTask, removeTask}
}