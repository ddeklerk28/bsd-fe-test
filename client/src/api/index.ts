import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const api = (() => {
  const fetchTrends = async () => {
    const { data } = await instance.get('/trend');

    return data;
  };

  const fetchTrend = async (id: string) => {
    const { data } = await instance.get(`/trend/${id}`);

    return data;
  };

  return {
    fetchTrends,
    fetchTrend,
  };
})();
