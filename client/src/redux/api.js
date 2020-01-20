import axios from 'axios';

export default axios.create({
	baseURL: `https://server.codewonders.now.sh/api`,
});
