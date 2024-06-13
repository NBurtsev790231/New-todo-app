import { StyleHeader } from "./Style/StyleHeader";
import img from './IMG/img1.jpg'

export const Header = () => {
	return (
		<StyleHeader>
			<img src={img} alt="todo-list-img"/>
			<h1>Список задач</h1>
		</StyleHeader>
	)
};