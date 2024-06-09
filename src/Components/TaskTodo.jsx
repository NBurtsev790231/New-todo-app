

export const TaskTodo = (props) => {
	return (
		<div key={props.id}>
		  <input type={"checkbox"} onClick={() => props.toggleTask(props.id)} defaultChecked= {props.status}/>
			<p>{props.value}</p>
			<button onClick={() => props.deleteTask(props.id)}>Удалить</button>
		</div>
	)
};