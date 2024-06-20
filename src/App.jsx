import { useState } from "react";
import { Header } from "./Components/Header";
import { InputTodo } from "./Components/InputTodo";
import { TaskTodo } from "./Components/TaskTodo";
import { StyleButton } from "./Components/Style/StyleButton";
import { StyleBody } from "./Components/Style/StyleBody";

function App() {
  //Разобрать хуки
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState('');

  let copyTasks = tasks;


const addTask = () => {
  const taskTodo = {
    id: Math.random(),
    value: todo,
    status: false,
  };

  let newTask = [...tasks, taskTodo];
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


//Разобраться с конструкцией switch/case
switch (done) {
  case "All":
     copyTasks = tasks
    break;
    case "Active":
     copyTasks = tasks.filter(e => e.status === false)
    break;
    case "Completed":
      copyTasks = tasks.filter(e => e.status === true)
    break;

  default:
    break;
};


//Констуркция для сборки страницы
const taskTodoList = copyTasks.map(e => <TaskTodo 
   id = {e.id} 
   value = {e.value} 
   status = {e.status}
   deleteTask = {deleteTask}
   toggleTask = {toggleTask}/>);

   
   
//Вывод на страницу
  return (
    <StyleBody className="App">
      <Header/>
      <InputTodo 
       addTask = {addTask} todo = {todo} setTodo = {setTodo}
       />
      {taskTodoList}
      <StyleButton>
      <button onClick={() => setDone("All")}>Все</button>
      <button onClick={() => setDone("Active")}>Активные</button>
      <button onClick={() => setDone("Completed")}>Выполнено</button>
      </StyleButton>
    </StyleBody>
  );
};

export default App;
