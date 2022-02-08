import './styles.css';

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
        <div className="sales-by-date-chart"></div>
      </div>
    </div>
  );
}

export default SalesByDate;
