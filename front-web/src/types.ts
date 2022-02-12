export type SalesByDate = {
  date: string;
  sum: number;
};

export type SalesByDateChartSeries = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
