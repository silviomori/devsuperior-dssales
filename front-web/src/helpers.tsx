import { SalesByPaymentMethodData, SalesByStoreData } from './types';

export const buildSalesByStoreChartData = (salesByStoreData: SalesByStoreData[]) => {
  const labels = salesByStoreData.map((item) => item.storeName);
  const series = salesByStoreData.map((item) => item.sum);
  return { labels, series };
};

export const buildSalesByPaymentMethodChartData = (
  salesByPaymentMethodData: SalesByPaymentMethodData[]
) => {
  const labels = salesByPaymentMethodData.map((item) => item.description);
  const series = salesByPaymentMethodData.map((item) => item.sum);
  return { labels, series };
};
