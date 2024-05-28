


export const TaskTodo = (props) => {
	return (
		<div key={props.id}>
		  <input type={"checkbox"}/>
			<p>{props.value}</p>
			<button>Удалить</button>
		</div>
	)
};