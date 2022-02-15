import { Gender } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other'
  };
  return textByGender[gender];
};
