import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as AverageIcon } from '../../assets/sales-summary-average.svg';
import { ReactComponent as QuantityIcon } from '../../assets/sales-summary-quantity.svg';
import { ReactComponent as MinimumIcon } from '../../assets/sales-summary-minimum.svg';
import { ReactComponent as MaximumIcon } from '../../assets/sales-summary-maximum.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { useAppContext } from '../../AppContext';

type Props = {
  filterData?: FilterData;
};

const initialSummaryData: SalesSummaryData = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesSummary({ filterData }: Props) {
  const { isConnected } = useAppContext();

  const [summaryData, setSummaryData] = useState<SalesSummaryData>(initialSummaryData);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    if (isConnected) {
      makeRequest.get<SalesSummaryData>('/sales/summary', { params }).then((response) => {
        setSummaryData(response.data);
      });
    }
  }, [params, isConnected]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard
        value={summaryData?.avg?.toFixed(2)}
        label="Average"
        icon={<AverageIcon />}
      />
      <SalesSummaryCard value={summaryData?.count} label="Quantity" icon={<QuantityIcon />} />
      <SalesSummaryCard value={summaryData?.min} label="Minimum" icon={<MinimumIcon />} />
      <SalesSummaryCard value={summaryData?.max} label="Maximum" icon={<MaximumIcon />} />
    </div>
  );
}

export default SalesSummary;
