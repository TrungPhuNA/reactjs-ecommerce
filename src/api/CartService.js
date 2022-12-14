import axiosClient from './axiosClient';

const cartApi = {

    async getTransaction(params) {
        try {
			const newParams = { ...params }
			const url = `transaction/lists`;
			console.log('--------- newParams: ', newParams);
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getOrderList@Error ', e);
		}

		return  {
			status: 501
		}
    },
    async createTransaction(data) {
        try {
            const url = `transaction/create`;
            const response = await axiosClient.post(url, data);
            console.log('------------- createTransaction@response: ', response);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- createTransaction@Error ', e);
        }

        return {
            status: 501
        }
    },

}

export default cartApi;