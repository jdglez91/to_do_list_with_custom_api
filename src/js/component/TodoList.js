import React, { useState, useEffect } from "react";

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
		{ label: "do laundry" },
		{ label: "clean house" },
		{ label: "take out the dog" }
	]);

	useEffect(() => {
		fetch(
			"https://3000-ec56db6b-7e7e-436f-9533-6dc606ab4f77.ws-us02.gitpod.io/todos"
		)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				console.log("responseAsJson", responseAsJson);
				setTodos(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			}); // whatever you code here will execute only after the first time the component renders
	}, []); // <------ PLEASE NOTICE THE EMPTY ARRAY

	const handleChange = e => {
		setSingleTodo({ label: e.target.value, done: false });
	};
	const handleClick = e => {
		fetch(
			"https://3000-ec56db6b-7e7e-436f-9533-6dc606ab4f77.ws-us02.gitpod.io/todos",
			{
				method: "POST", // or 'POST'
				body: JSON.stringify(singleTodo), // data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => setTodos(response))
			.catch(error => console.error("Error:", error));
		setSingleTodo({ label: "" });
	};
	const deleteTodo = id => {
		fetch(
			"https://3000-ec56db6b-7e7e-436f-9533-6dc606ab4f77.ws-us02.gitpod.io/todos" +
				"/" +
				id,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setTodos(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					name="todo"
					onChange={handleChange}
					value={singleTodo.label}
				/>
				<button onClick={handleClick}>Save</button>
			</form>
			<div>
				{todos.map((todoItem, i) => {
					return (
						<div key={i}>
							{todoItem.label}
							<span
								type="button"
								onClick={() => deleteTodo(todoItem.id)}>
								{" "}
								X{" "}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TodoList;
