import {useEffect, useState, useRef} from 'react';
import { getTasks, createTask } from '../../api/tasks'

import {Task} from '../task/task/Task'
import {NewTask} from '../task/newTask/NewTask'
import {Help} from '../help/Help'

import style from './style.module.scss'
export const Main = () => {

    const isMounted = useRef(true);

    const [ tasks, editTasks ] = useState([])
    const [ isAdding, setIsAdding ] = useState(false)
    const [ newTask, setNewTask ] = useState({})
    const [ ishelper, setIsHelper ] = useState(true)

    useEffect( async () => {
        if(newTask.name) await createTask(newTask)
        await getTasks() .then(data => editTasks(data.data))
    }, [newTask])


  return <div className={style.container}>
    <div className={style.title}>
      <h1>Task Tracker</h1>
      <button className='btn1' onClick={() => setIsAdding(!isAdding)} >Add</button>
    </div>
      {isAdding && <NewTask 
        setNewTask={setNewTask}
        setIsAdding={setIsAdding}
      />}
      <Task 
       tasks = {tasks}
       editTasks = {editTasks}
      />
      <button onClick={() => setIsHelper(!ishelper)} >Help</button>
      {ishelper && <Help/>}
  </div>;
};
