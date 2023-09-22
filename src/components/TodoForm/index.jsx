import React, { useState, useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";

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
			<div className="container">
				<h3>TodoForm</h3>
				<form className="form-control" onSubmit={addTask}>
					<input
						className="input-form"
						type="text"
						value={inputitem}
						onChange={(e) => setInputItem(e.target.value)}
						placeholder="Enter your data"
					/>
					<button className="form-btn" type="Submit">
						+
					</button>
				</form>
			</div>
		</>
	);
}

export default TodoForm;
