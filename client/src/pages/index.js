import React, { Fragment } from 'react';
import { ReactComponent as Banner } from '../assets/banner.svg';
import styled from 'styled-components';

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

const TodoStyle = styled.div``;
const IndexPage = () => {
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
			<TodoStyle>hoo</TodoStyle>
		</Fragment>
	);
};

export default IndexPage;
