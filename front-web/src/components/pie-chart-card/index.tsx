import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  name: string;
  labels: string[];
  series: number[];
};

function PieChartCard({ name, labels, series }: Props) {
  return (
    <div className="pie-chart-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
