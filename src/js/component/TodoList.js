<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
//{} means that this is not a dafault import/exporting
import Todo from "./Todo";
>>>>>>> a61127e83432a46fbd154433bc5fbff1e8a7bdb9

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
<<<<<<< HEAD
		{ label: "do laundry" },
		{ label: "clean house" },
		{ label: "take out the dog" }
	]);

	useEffect(() => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/f1996")
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
		setTodos([...todos, singleTodo]);
		setSingleTodo({});
		//to set singleTodo {}
	};
	const deleteTodo = task => {
		const newTodos = todos.filter(item => item.label !== task);
		console.log(newTodos);
		setTodos(newTodos);
	};
=======
		{ label: "brush teeth" },
		{ label: "make the bed" },
		{ label: "walk dog" }
	]);
	const handleChange = e => {
		setSingleTodo({ label: e.target.value });
	};
	const handleClick = e => {
		setTodos([...todos, singleTodo]);
	};
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	// the state is immutable - you can never change the state.
	// We copy the state we can manipulate the copy of the state then we
	// push the new todo

>>>>>>> a61127e83432a46fbd154433bc5fbff1e8a7bdb9
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					name="todo"
					onChange={handleChange}
					value={singleTodo.label}
				/>
<<<<<<< HEAD
				<button onClick={handleClick}>Save</button>
			</form>
			<div>
				{todos.map((todoItem, i) => {
					return (
						<div key={i}>
							{todoItem.label}
							<span
								type="button"
								onClick={() => deleteTodo(todoItem.label)}>
								{" "}
								X{" "}
							</span>
						</div>
					);
				})}
			</div>
=======
				<button onClick={handleClick}> Save </button>
			</form>
			{todos.map((value, index) => (
				//map manipulates an array, if you want to change anything to an array you use map method
				//creating a new a array from the old array
				<Todo
					todo={value.label}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
			<div className="remaining-todos"> {todos.length} item left </div>
>>>>>>> a61127e83432a46fbd154433bc5fbff1e8a7bdb9
		</>
	);
};

export default TodoList;
<<<<<<< HEAD
=======

//.prevents from submitting form/refreshing

//other ways to complete handle click
// setTodos(todos.concat(singleTodo))

//     let newTodos = []
//     for (let i = 0; i<todos.length; i++){
//             newTodos.push(todos[i])
//     }
//     newTodos.push(singleTodo)
//     setTodos (newTodos)
// }

//React is a one page application if you refresh the site then you might lose information in your state
//we dont want that
>>>>>>> a61127e83432a46fbd154433bc5fbff1e8a7bdb9
