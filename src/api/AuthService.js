import axiosClient from "./axiosClient";

const authApi = {

    async getUserLogin() {
        try {
            const url = `auth/login`;
            const response = await axiosClient.get(url);

            if (response.status === 201) {
                return response;
            }
        } catch (e) {
            console.log("---- Login Error@");
        }

        return {
            status: 401,
        };
    },

    async getUserProfile() {
        try {
            const url = `auth/profile`;
            const response = await axiosClient.get(url);

            if (response.status === 200) {
                return response;
            }
        } catch (e) {
            console.log("---- Profile Error@");
        }

        return {
            status: 401,
        };
    },
};

export default authApi;
