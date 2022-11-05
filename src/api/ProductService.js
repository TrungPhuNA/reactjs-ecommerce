import axiosClient from './axiosClient';

const productApi = {
	async getListsProducts(params) {
		try {
			console.log('------------ params: ', params);
			const newParams = { ...params }
			const url = `product/lists`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getListsProducts@Error ', e);
		}

		return  {
			status: 501
		}
	},

	async findById(id) {
		try {
			const url = `product/show/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
		}

		return  {
			status: 501
		}
	},
}

export default productApi;