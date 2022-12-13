import axiosClient from "./axiosClient";

const authApi = {
    async getProfile() {
        try {
            const url = `auth/profile`;

            const response = await axiosClient.get(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            })
            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- getListsProducts@Error ', e);
            return {
                status: 501,
                data: []
            }
        }
    }
};

export default authApi;
