export type SalesByDate = {
  date: string;
  sum: number;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByStoreData = {
  storeName: string;
  sum: number;
};

export type SalesByPaymentMethodData = {
  description: string;
  sum: number;
};

export type PieChartData = {
  labels: string[];
  series: number[];
};

export type SalesByDateChartSeries = {
  x: string;
  y: number;
};

export type SaleDetailsResponse = {
  content: SaleDetails[];
};

export type SaleDetails = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
