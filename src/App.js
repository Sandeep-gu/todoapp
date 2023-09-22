import { createContext, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import CompletedTodo from "./components/CompletedTodo/Index";
export const GlobalContext = createContext();

function App() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		if (localStorage.getItem("todos")) {
			const todos = localStorage.getItem("todos");
			setItems(JSON.parse(todos));
		} else {
			localStorage.setItem("todos", JSON.stringify(items));
		}
	}, []);
	return (
		<GlobalContext.Provider value={{ items, setItems }}>
			<div className="container">
				<TodoForm />
				<TodoList />
				<CompletedTodo />
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
