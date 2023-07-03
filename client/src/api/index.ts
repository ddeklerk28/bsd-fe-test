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

  return {
    fetchTrends,
  };
})();
