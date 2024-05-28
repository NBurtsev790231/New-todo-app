import { Header } from "./Components/Header";
import { InputTodo } from "./Components/InputTodo";
import { TaskTodo } from "./Components/TaskTodo";

function App() {
  return (
    <div className="App">
      <Header/>
      <InputTodo/>
      <TaskTodo/>
    </div>
  );
};

export default App;
