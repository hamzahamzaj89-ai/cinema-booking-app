import api from "../apis/axios";

export const getBranches = async () => {
    try {

        const response = await api.get("/branch/get");

        return response.data;

    } catch (error: any) {

        throw new Error(
            error?.response?.data?.message || "Failed to fetch branches"
        );

    }
};