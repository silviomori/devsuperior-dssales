import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as AverageIcon } from '../../assets/sales-summary-average.svg';
import { ReactComponent as QuantityIcon } from '../../assets/sales-summary-quantity.svg';
import { ReactComponent as MinimumIcon } from '../../assets/sales-summary-minimum.svg';
import { ReactComponent as MaximumIcon } from '../../assets/sales-summary-maximum.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Average" icon={<AverageIcon />} />
      <SalesSummaryCard value={630} label="Quantity" icon={<QuantityIcon />} />
      <SalesSummaryCard value={130} label="Average" icon={<MinimumIcon />} />
      <SalesSummaryCard value={230} label="Average" icon={<MaximumIcon />} />
    </div>
  );
}

export default SalesSummary;
