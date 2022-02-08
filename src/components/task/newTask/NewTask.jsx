import React from 'react';

import style from './style.module.scss'

export const NewTask = ({ setIsAdding, setNewTask}) => {

    const addTask = (e) => {
        e.preventDefault()
        const newTask = {
            name: e.target.name.value,
            description: e.target.description.value,
            status: 'on going'
        }
        setNewTask(newTask)
        console.log(e.target.name.value)
        setIsAdding(false)
    }

  return <div className={style.container}>
      <h2>New Task</h2>
      <form onSubmit={addTask}>
          <input type="text" name="name" placeholder='name' required autoFocus />
          <input type="text" name="description" placeholder='description' required />
          <button>Add</button>
      </form>
  </div>;
};
