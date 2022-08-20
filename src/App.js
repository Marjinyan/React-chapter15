import './App.css';
import {useEffect, useState} from 'react'
import ToDoList from './components/ToDoList'

function App() {
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState(0)

  useEffect(() => {
    setDone(tasks.filter(a => a.done).length)
  }, [tasks])

  const doneTask = task => {
    task.done = true
    task.timeCompleted = Date.now()
    setTasks([...tasks])
  }

  const cancelTask = task => {
    task.done = false
    task.timeCompleted = null
    setTasks([...tasks])
  }
  
  const addTask = task => {
    setTasks([task,...tasks])
  }

  return (
    <ToDoList
      data={tasks}
      done = {done}
      onComplete = {doneTask}
      onAdd = {addTask}
      onCancel = {cancelTask}
    />
  );
}

export default App;
