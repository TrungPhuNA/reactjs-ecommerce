import axiosClient from './axiosClient';

const ratingApi = {
	async createRate(data) {
		try {
			const url = `vote/store`;
			const response = await axiosClient.post(url, data)

			if (response.status === 201) {
				return response;
			}
		} catch (e) {
			console.log('--------------- CreateRate@Error ', e);
		}
	},

	async getListRateByProducts(id) {
		try {
			const url = `vote/lists?page=1&page_size=10&product_id=${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response;
			}
		} catch (e) {
			console.log('--------------- getRate@Error ', e);
		}
	},
}

export default ratingApi;
