import axios from 'axios';
// require('dotenv').config();

// const URL_API = process.env.URL_API;
// console.log('----------- URL_API: ', URL_API);
const axiosClient = axios.create({
	// baseURL: 'http://localhost:3006/api',
	baseURL: 'https://api-ecm.123code.net/api',
	headers: {
		'content-type': 'application/json',
	}
})
//
// export const axiosClient = () => {
// 	axios.defaults.baseURL = 'https://api-ecm.123code.net/api';
// 	axios.interceptors.response.use(
// 		function (response) {
// 			if (response.data) {
// 				// return success
// 				if (response.status === 200 || response.status === 201) {
// 					return response;
// 				}
// 				// reject errors & warnings
// 				return Promise.reject(response);
// 			}
//
// 			// default fallback
// 			return Promise.reject(response);
// 		},
// 		function (error) {
// 			// if the server throws an error (404, 500 etc.)
// 			return Promise.reject(error);
// 		}
// 	);
// };


export default axiosClient;
