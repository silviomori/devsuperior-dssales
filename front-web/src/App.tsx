import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { buildSalesByPaymentMethodChartData, buildSalesByStoreChartData } from './helpers';
import { FilterData, PieChartData, SalesByPaymentMethodData, SalesByStoreData } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { useAppContext } from './AppContext';
import WaitForServers from './components/wait-for-servers';

const initialPieChartData: PieChartData = {
  labels: [],
  series: []
};

function App() {
  const { isConnected } = useAppContext();

  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const [salesByStoreData, setSalesByStoreData] = useState<PieChartData>(initialPieChartData);
  useEffect(() => {
    if (isConnected) {
      makeRequest.get<SalesByStoreData[]>('/sales/by-store', { params }).then((response) => {
        setSalesByStoreData(buildSalesByStoreChartData(response.data));
      });
    }
  }, [params, isConnected]);

  const [salesByPaymentMethodData, setSalesByPaymentMethodData] =
    useState<PieChartData>(initialPieChartData);
  useEffect(() => {
    if (isConnected) {
      makeRequest
        .get<SalesByPaymentMethodData[]>('/sales/by-payment-method', { params })
        .then((response) => {
          setSalesByPaymentMethodData(buildSalesByPaymentMethodChartData(response.data));
        });
    }
  }, [params, isConnected]);

  return (
    <>
      {!isConnected && <WaitForServers />}
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard
            name="Stores"
            labels={salesByStoreData?.labels}
            series={salesByStoreData?.series}
          />
          <PieChartCard
            name="Payment type"
            labels={salesByPaymentMethodData?.labels}
            series={salesByPaymentMethodData?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
