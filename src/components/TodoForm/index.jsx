import React, { useState, useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";
import { AiOutlinePlus } from "react-icons/ai";
const createTodo = (content) => {
	return { id: new Date().toISOString(), content: content, complete: false };
};
function TodoForm() {
	const [inputitem, setInputItem] = useState("");
	const { items, setItems } = useContext(GlobalContext);

	const addTask = (e) => {
		e.preventDefault();
		if (inputitem) {
			localStorage.setItem(
				"todos",
				JSON.stringify([...items, createTodo(inputitem)])
			);
			setItems([...items, createTodo(inputitem)]);
			setInputItem("");
		}
	};

	return (
		<>
			<div className="form-wrapper">
				<form className="form-container" onSubmit={addTask}>
					<input
						className="input-form"
						type="text"
						value={inputitem}
						onChange={(e) => setInputItem(e.target.value)}
						placeholder="Enter your data"
					/>
					<button className="form-btn" type="Submit">
						<AiOutlinePlus />
					</button>
				</form>
			</div>
		</>
	);
}

export default TodoForm;
