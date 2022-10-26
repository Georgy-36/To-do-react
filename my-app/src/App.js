import React, {useState} from 'react';
import './styles/app.css';
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import TaskForm from "./components/TaskForm";

function App() {
    const[tasks, setTasks] = useState([
        {id: 1, title: 'Проснуться', body: 'Умыться, прийти в сознание'},
        {id: 2, title: 'Поесть', body: 'Приготовить макарошек'},
        {id: 3, title: 'Покодить', body: 'Спаси и сохрани'},
        {id: 4, title: 'Спать', body: 'ые'},
    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

  return (
    <div className="App">
        <TaskForm create={createTask}/>
        {tasks.length !== 0
            ? <TaskList remove={removeTask} tasks={tasks} title="Список дел"/>
            : <h1 style={{textAlign: 'center'}}>Записи не найдены</h1>
        }

    </div>
  );
}

export default App;
