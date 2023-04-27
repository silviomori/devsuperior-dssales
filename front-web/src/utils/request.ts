import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

export const baseURL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = axios.create({ baseURL });

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender
  };
};
