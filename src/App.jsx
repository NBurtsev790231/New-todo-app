import { useState } from "react";
import { Header } from "./Components/Header";
import { InputTodo } from "./Components/InputTodo";
import { TaskTodo } from "./Components/TaskTodo";

function App() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);


const addTask = () => {
  const taskTodo = {
    id: Math.random(),
    value: todo,
    status: false,
  };

  let newTask = [taskTodo, ...tasks];
  setTasks (newTask);
  setTodo("");
};


const deleteTask = (id) => {
  let deleteTaskId = tasks.filter(e => e.id !== id)
  setTasks(deleteTaskId);
}




//Разобраться с логическими операторами и их применением
const toggleTask = (id) => {
  let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status} : {...e});
  setTasks(toggle);
};



//Констуркция для сборки страницы
const taskTodoList = tasks.map(e => <TaskTodo 
   id = {e.id} 
   value = {e.value} 
   status = {e.status}
   deleteTask = {deleteTask}
   toggleTask = {toggleTask}/>);


   
//Вывод на страницу
  return (
    <div className="App">
      <Header/>
      <InputTodo 
       addTask = {addTask} todo = {todo} setTodo = {setTodo}
       />
      {taskTodoList}
    </div>
  );
};

export default App;
