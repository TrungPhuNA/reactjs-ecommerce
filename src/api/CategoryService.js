import axiosClient from './axiosClient';
// import axios from 'axios';
const categoryApi = {
	async getListsCategory(params) {
		try {
			const newParams = { ...params }
			const url = `category/lists`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- E ', e);
		}
	},
}

export default categoryApi;
