import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const api = (() => {
    const fetchTrends = async () => {
        try {
            const { data } = await instance.get('/trend');

            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error);
            }
        }
    }

    const fetchTrend = async (id: string) => {
        try {
            const { data } = await instance.get(`/trend/${id}`);

            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error);
            }
        }
    }

    return {
        fetchTrends,
        fetchTrend
    }
})();