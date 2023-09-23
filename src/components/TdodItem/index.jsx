import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./style.css";
import { GlobalContext } from "../../App";
function TodoItem({ item }) {
	const { setItems } = useContext(GlobalContext);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = (id) => {
		const localStorageData = JSON.parse(localStorage.getItem("todos"));
		const updatedData = localStorageData.filter((todo) => {
			return id !== todo.id;
		});
		localStorage.setItem("todos", JSON.stringify(updatedData));

		setIsDeleting(true); // Trigger the deletion animation

		// Remove the item after the animation completes
		setTimeout(() => {
			setItems(updatedData);
			setIsDeleting(false);
		}, 200); // You can adjust the duration to match your CSS transition duration
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
		<li className={`todo-item-wrapper ${isDeleting ? "delete" : ""}`}>
			<span>{item.content} </span>
			<span className="btns">
				<button
					type="button"
					className="btn complete-btn"
					onClick={() => handleComplete(item.id)}
				>
					<AiOutlineCheckCircle />
				</button>
				<button
					type="button"
					className="btn delete-btn"
					onClick={() => handleDelete(item.id)}
				>
					<MdDelete />
				</button>
			</span>
		</li>
	);
}

export default TodoItem;
