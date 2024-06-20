import axios from 'axios';
import { ITrend } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const api = (() => {
  const fetchTrends = async (): Promise<{ data: ITrend[] }> => {
    const { data } = await instance.get('/trend');

    return data;
  };

  const fetchTrend = async (id: string): Promise<{ data: ITrend }> => {
    const { data } = await instance.get(`/trend/${id}`);

    return data;
  };

  return {
    fetchTrends,
    fetchTrend,
  };
})();
