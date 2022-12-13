import axiosClient from './axiosClient';

const cartApi = {
    async createTransaction(data) {
        try {
            const url = `transaction/create`;
            const response = await axiosClient.post(url, data);
            console.log('------------- createTransaction@response: ', response)
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- createTransaction@Error ', e);
        }

        return {
            status: 501
        }
    }
}

export default cartApi;