import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {


    if (newTaskTitle !== "") {
      const contasksArray = [{
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }]
      setTasks(oldState => [...oldState, ...contasksArray]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let newTasks = tasks.map(task => (
      task.id === id ? { ...task, done: !task.done } : task
    ))
    setTasks(newTasks)

  }

  function handleRemoveTask(id: number) {
   let newTasks = tasks.filter(task => task.id !== id)
   setTasks(newTasks)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}