import React, { useState } from 'react';
import {Switch} from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import dark from '../theme/dark';
import light from '../theme/light';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handleAddTask(newTaskTitle: string) {
   console.warn(newTaskTitle);
   

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
      <Header theme= {isEnabled} />

      <TodoInput addTask={handleAddTask} />
      <Switch
         onValueChange={toggleSwitch}
         value={isEnabled}
      />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}