import { ApexOptions } from 'apexcharts';
import { SalesByDate } from '../../types';

export const chartOptions = {
  legend: {
    show: false
  },
  noData: {
    text: 'No data',
    align: 'center',
    verticalAlign: 'middle',
    offsetY: -15,
    style: {
      color: '#FFF',
      fontSize: '18px',
      fontFamily: 'Roboto, sans-serif'
    }
  },
  chart: {
    foreColor: '#b4bed2',
    height: 240,
    with: 1000
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'MMM, dd'
    }
  },
  yaxis: {},
  fill: {
    opacity: 1,
    colors: ['#3e82f7']
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return `$ ${val}`;
      }
    }
  }
} as ApexOptions;

export const buildChartSeries = (salesByDateArray: SalesByDate[] = []) => {
  return salesByDateArray.map(({ date, sum }) => ({ x: date, y: sum }));
};

export const sumSalesByDate = (salesByDateArray: SalesByDate[] = []) => {
  return salesByDateArray.reduce((sum, item) => {
    return sum + item.sum;
  }, 0);
};
