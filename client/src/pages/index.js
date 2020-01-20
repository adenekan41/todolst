import React, { Fragment, useEffect } from 'react';
import { ReactComponent as Banner } from '../assets/banner.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../redux/todo/todo.actions';

const IndexStyle = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	h5 {
		font-size: 30px;
		color: #ff5678;
		letter-spacing: -1px;
		font-weight: 300;
		margin-bottom: 2rem;
		text-transform: initial;
		b {
			font-size: 40px;
			font-weight: 900;
			color: #000;
		}
	}
	h1 {
		font-weight: 800;
		font-size: 73px;
		line-height: 80px;
		color: #1b1b1b;
		margin-bottom: 1rem;
	}
	svg {
		width: 100%;
		height: 100%;
	}
	p {
		color: #717171;
		font-size: 16px;
		font-weight: 400;
	}
	button {
		background: #ff5678;
		border: none;
		border-radius: 50px;
		padding: 12px 32px;
		font-weight: 500;
		margin-top: 1rem;
	}
`;

const TodoStyle = styled.div`
	h1 {
		font-weight: 800;
		font-size: 33px;
		color: #1b1b1b;
	}
	p.new-todo {
		color: #717171;
		font-size: 15px;
		/* margin-bottom: 1rem; */
		font-weight: 400;
	}
`;

const propTypes = {
	getTodos: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired,
};
const Todos = ({ todo: { todos, loading }, getTodos }) => {
	useEffect(() => {
		getTodos();
	}, [getTodos]);
	return (
		<Fragment>
			<IndexStyle>
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<h5>
								Todolist <b>.</b>
							</h5>
							<h1>
								Start Making <br /> Progress
							</h1>
							<p>
								Create Your first Todo with todolist.io we manage your todo.
							</p>
							<button className="btn btn-danger">Create your first todo</button>
						</div>
						<div className="col-md-7">
							<Banner />
						</div>
					</div>
				</div>
			</IndexStyle>
			<TodoStyle>
				<div className="container">
					<h1 className="text-center">Create Your Next Todo</h1>
					<p className="text-center new-todo">Added a new todo below</p>
					{/* <TodoForm /> */}
					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<div className="card-body"></div>
							</div>
						</div>
					</div>
				</div>
			</TodoStyle>
		</Fragment>
	);
};

Todos.propTypes = propTypes;
const mapStateToProps = (state) => ({
	todo: state.todos,
});
export default connect(mapStateToProps, { getTodos })(Todos);
