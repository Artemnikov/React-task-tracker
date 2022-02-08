import React from 'react';

import style from './style.module.scss'

import {deleteTask, updateTask} from '../../../api/tasks'

export const Task = ({ tasks, isEditing, editTasks }) => {

    const deleteTaskBtn = async (id) => {
        await deleteTask(id)
        const newTasks = tasks.filter(task => task.id !== id)
        editTasks(newTasks)
    }

    const taskStatus = (item, index) => {
        if(item.status === 'on going'){
            editTasks([...tasks, tasks[index].status = 'done'])
        } else editTasks([...tasks, tasks[index].status = 'on going'])
        updateTask(item)
    }
  return <ul className={style.container}>
      {tasks.map((item, index) => (
          <li key={index} >
              <p className={style.clickable} onDoubleClick={() => {deleteTaskBtn(item.id)}}> {item.name} </p>
              <p> {item.description} </p>
              <p className={style.clickable} onDoubleClick={() => taskStatus(item, index)} > {item.status} </p>
            </li>
      ))}
  </ul>;
};
