import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./style.css";
import { GlobalContext } from "../../App";
function TodoItem({ item }) {
	const { setItems } = useContext(GlobalContext);

	const handleDelete = (id) => {
		const localStorageData = JSON.parse(localStorage.getItem("todos"));
		const updatedData = localStorageData.filter((todo) => {
			return id !== todo.id;
		});
		localStorage.setItem("todos", JSON.stringify(updatedData));
		setItems(updatedData);
	};

	const handleComplete = (id) => {
		const localStorageData = JSON.parse(localStorage.getItem("todos"));
		const updatedData = localStorageData.map((todo) => {
			if (id === todo.id) {
				return { ...todo, complete: true };
			} else {
				return todo;
			}
		});
		localStorage.setItem("todos", JSON.stringify(updatedData));
		setItems(updatedData);
	};
	return (
		<li>
			<span>{item.content} </span>
			<span className="btns">
				<button type="button" onClick={() => handleComplete(item.id)}>
					<AiOutlineCheckCircle />
				</button>
				<button type="button" onClick={() => handleDelete(item.id)}>
					<MdDelete />
				</button>
			</span>
		</li>
	);
}

export default TodoItem;
