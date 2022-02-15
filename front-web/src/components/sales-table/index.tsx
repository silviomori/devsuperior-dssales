import { useEffect, useMemo, useState } from 'react';
import { FilterData, SaleDetails, SaleDetailsResponse } from '../../types';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

function SalesTable({ filterData }: Props) {
  const [saleDetails, setSaleDetails] = useState<SaleDetails[]>([]);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SaleDetailsResponse>('/sales', { params }).then((response) => {
      setSaleDetails(response.data.content);
    });
  }, [params]);

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Store</th>
            <th>Payment type</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {saleDetails.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{formatDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
