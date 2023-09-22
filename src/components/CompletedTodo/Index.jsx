import React, { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import TodoItem from "../TdodItem";

const CompletedTodo = () => {
	const { items, setItems } = useContext(GlobalContext);
	return (
		<div>
			<h4>Completed Todo</h4>
			<ul>
				{items.map((item) => {
					if (item.complete) {
						return <li key={item.id}>{item.content}</li>;
					}
				})}
			</ul>
		</div>
	);
};

export default CompletedTodo;
