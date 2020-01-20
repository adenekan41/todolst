const TodoForm = ({ addTodo }) => {
	// Input tracker
	let input;

	return (
		<div>
			<input
				ref={(node) => {
					input = node;
				}}
			/>
			<button
				onClick={() => {
					addTodo(input.value);
					input.value = '';
				}}
			>
				+
			</button>
		</div>
	);
};
