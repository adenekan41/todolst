import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTodo } from '../../redux/todo/todo.actions';
import styled from 'styled-components';
const propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
const TodoItemStyle = styled.div`
	.card button {
		font-size: 14px;
		padding: 2px 8px;
		background: #fff;
		font-weight: 800;
		color: #ff5678;
		float: right;
		margin-top: -6px;
		margin-right: -6px;
		border-radius: 50%;
		border: 1px solid #ff5678;
	}
	.card p {
		font-size: 14px;
		font-weight: 500;
		color: #949494;
	}
	.card h3 {
		font-size: 30px;
		font-weight: 700;
		color: #3c3c3c;
	}
	.card {
		box-shadow: 0 2px 15px #0000001f;
		border: none;
	}
`;
const TodoItem = ({ todo: { _id, text, date }, deleteTodo }) => {
	return (
		<TodoItemStyle className="col-md-4 mb-4">
			<div className="card">
				<div className="card-body">
					<button
						type="button"
						className="btn btn-danger"
						onClick={(e) => deleteTodo(_id)}
					>
						X
					</button>
					<h3 className="my-1">{text}</h3>
					<p className="Todo-date">
						Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
					</p>
				</div>
			</div>
		</TodoItemStyle>
	);
};

TodoItem.propTypes = propTypes;

export default connect(null, { deleteTodo })(TodoItem);
