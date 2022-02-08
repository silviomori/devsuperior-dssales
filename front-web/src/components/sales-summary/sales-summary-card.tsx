import './styles.css';
import { ReactComponent as CardIcon } from '../../assets/sales-summary-average.svg';

function SalesSummaryCard() {
  return (
    <div className="base-card sales-summary-card">
      <CardIcon />
      <h3 className="sales-summary-card-value">534,00</h3>
      <span className="sales-summary-card-label">Average</span>
    </div>
  );
}

export default SalesSummaryCard;
