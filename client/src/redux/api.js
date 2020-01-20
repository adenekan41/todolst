import axios from 'axios';

export default axios.create({
	baseURL: `https://cors-anywhere.herokuapp.com/https://server.codewonders.now.sh/api`,
	mode: 'no-cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});
