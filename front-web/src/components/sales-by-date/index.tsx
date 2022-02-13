import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterData, SalesByDate, SalesByDateChartSeries } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

function SalesByDateComponent({ filterData }: Props) {
  const [salesByDateChartSeries, setSalesByDateChartSeries] = useState<SalesByDateChartSeries[]>(
    []
  );
  const [salesByDateTotalSum, setSalesByDateTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesByDate[]>('/sales/by-date', { params }).then((response) => {
      setSalesByDateChartSeries(buildChartSeries(response.data));
      setSalesByDateTotalSum(sumSalesByDate(response.data));
    });
  }, [params]);

  return (
    <div className="base-card sales-by-date-container">
      <div>
        <h4 className="sales-by-date-title">Daily Sales Report</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData.dates[0])} to {formatDate(filterData.dates[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity-value">{formatPrice(salesByDateTotalSum)}</h2>
          <span className="sales-by-date-quantity-label">Sales in the period</span>
          <span className="sales-by-date-quantity-description">
            This chart shows sales across all stores
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Sales', data: salesByDateChartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDateComponent;
