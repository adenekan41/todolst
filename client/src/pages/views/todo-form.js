import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../../redux/todo/todo.actions';
const propTypes = {
	createTodo: PropTypes.func.isRequired,
};

const TodoForm = ({ createTodo }) => {
	const [formData, setFormData] = useState({
		text: '',
	});
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const { text } = formData;
	const onSubmit = async (e) => {
		e.preventDefault();
		createTodo(formData);
		setFormData({ text: '' });
	};
	return (
		<div>
			<div className="row align-items-center justify-content-center">
				<div className="col-md-9">
					<form className="form my-1" onSubmit={(e) => onSubmit(e)}>
						<div className="row">
							<div className="col-md-9">
								<input
									name="text"
									placeholder="Create a Todo"
									required
									value={text}
									onChange={(e) => onChange(e)}
									className="form-control"
								/>
							</div>
							<div className="col-md-3">
								<button type="submit" className="btn btn-danger btn-block">
									Create Todo
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

TodoForm.propTypes = propTypes;

export default connect(null, { createTodo })(TodoForm);
