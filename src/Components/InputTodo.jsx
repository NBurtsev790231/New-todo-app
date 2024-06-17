import { StyleInput } from "./Style/StyleInput";

export const InputTodo = (props) => {
	return (
		<StyleInput>
		 <input value={props.todo}
		  onChange={
				(e) => props.setTodo(e.target.value)
				}/> 
		 <button onClick={() => props.addTask()}>Добавить</button>
		</StyleInput>
	)
};