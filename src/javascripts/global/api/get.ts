import axios from 'axios';
import { API } from './index';

export const getCarList = () => axios.get(API.GET.CARLIST);

export const getCarById = (carClassId: number) => {
  return axios.get(API.GET.CAR, {
    params: {
      carClassId,
    },
  });
};
