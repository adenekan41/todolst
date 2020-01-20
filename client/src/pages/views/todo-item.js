import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTodo } from '../../redux/todo/todo.actions';
const propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
const TodoItem = ({ todo: { _id, text, date }, deleteTodo }) => {
	return (
		<>
			<div className="Todo bg-white p-1 my-1">
				<div>
					<p className="my-1">{text}</p>
					<p className="Todo-date">
						Todoed on <Moment format="YYYY/MM/DD">{date}</Moment>
					</p>

					<button
						type="button"
						className="btn btn-danger"
						onClick={(e) => deleteTodo(_id)}
					>
						<i className="fas fa-times"></i>
					</button>
				</div>
			</div>
		</>
	);
};

TodoItem.propTypes = propTypes;

export default connect(null, { deleteTodo })(TodoItem);
