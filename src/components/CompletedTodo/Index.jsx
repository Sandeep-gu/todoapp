import React, { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import "./style.css";
import { MdDelete } from "react-icons/md";

const CompletedTodo = () => {
	const { items, setItems } = useContext(GlobalContext);
	const [deletedId, setDeletedId] = useState(null);

	const handleDelete = (id) => {
		const localStorageData = JSON.parse(localStorage.getItem("todos"));
		const updatedTodo = localStorageData.filter((todo) => todo.id !== id);
		localStorage.setItem("todos", JSON.stringify(updatedTodo));
		setDeletedId(id);
		setTimeout(() => {
			setDeletedId(null);
			setItems(updatedTodo);
		}, 400);
	};
	return (
		<div className="completed-todo-wrapper">
			<h4 className="completed-todo-heading">
				<span>Completed Todo</span>
			</h4>

			<ul className="completed-todo">
				{items.map((item) => {
					if (item.complete) {
						return (
							<li
								key={item.id}
								className={`delete-list-class ${
									deletedId === item.id ? "deleting-animation" : ""
								}`}
							>
								<span>{item.content}</span>
								<button
									className="btn delete-btn"
									onClick={() => handleDelete(item.id)}
								>
									<MdDelete />
								</button>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default CompletedTodo;
