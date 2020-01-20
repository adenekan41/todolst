import React, { Fragment } from 'react';
import { ReactComponent as Banner } from '../assets/banner.svg';
import styled from 'styled-components';

const IndexStyle = styled.div`
	svg {
		width: 100%;
		height: 100%;
	}
`;
const IndexPage = () => {
	return (
		<IndexStyle>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h1>
							Start Making <br /> Progress
						</h1>
						<p>Create Your first Todo</p>
						<button>Create your first todo</button>
					</div>
					<div className="col-md-7">
						<Banner />
					</div>
				</div>
			</div>
		</IndexStyle>
	);
};

export default IndexPage;
