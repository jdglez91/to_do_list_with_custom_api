<<<<<<< HEAD
// import React from "react";

// export const Todo = () => {
//     return (

//     )
// }
=======
import React from "react";

const Todo = ({ todo, index, deleteTodo }) => {
	return (
		<>
			<div className="todo">
				<h5>{todo}</h5>
				<button
					className="btn-delete"
					onClick={() => deleteTodo(index)}>
					x
				</button>
			</div>
			<div className="line" />
		</>
	);
};

export default Todo;
>>>>>>> a61127e83432a46fbd154433bc5fbff1e8a7bdb9
