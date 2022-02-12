import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { SalesByDate, SalesByDateChartSeries } from '../../types';
import { formatPrice } from '../../utils/formatters';

function SalesByDateComponent() {
  const [salesByDateChartSeries, setSalesByDateChartSeries] = useState<SalesByDateChartSeries[]>(
    []
  );
  const [salesByDateTotalSum, setSalesByDateTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        setSalesByDateChartSeries(buildChartSeries(response.data));
        setSalesByDateTotalSum(sumSalesByDate(response.data));
      });
  }, []);

  return (
    <div className="base-card sales-by-date-container">
      <div>
        <h4 className="sales-by-date-title">Daily Sales Report</h4>
        <span className="sales-by-date-period">01/01/2017 to 01/31/2017</span>
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
