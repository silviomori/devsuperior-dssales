import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

const initialData = [
  { x: '2017-01-01', y: 50 },
  { x: '2017-01-05', y: 66 },
  { x: '2017-01-12', y: 48 },
  { x: '2017-01-28', y: 53 }
];

function SalesByDate() {
  return (
    <div className="base-card sales-by-date-container">
      <div>
        <h4 className="sales-by-date-title">Daily Sales Report</h4>
        <span className="sales-by-date-period">01/01/2017 to 01/31/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity-value">464,988.00</h2>
          <span className="sales-by-date-quantity-label">Sales in the period</span>
          <span className="sales-by-date-quantity-description">
            This chart shows sales across all stores
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Sales', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
