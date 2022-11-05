import axiosClient from './axiosClient';

const categoryApi = {
	async getListsCategory(params) {
		try {
			console.log('------------ params: ', params);
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
