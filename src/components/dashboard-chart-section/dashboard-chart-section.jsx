'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Stack } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.backgroundColor = '#c67070';
import { useTheme } from '@mui/material/styles';
const DashboardChartSection = () => {
  const theme = useTheme();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Vistors',
      },
    },
  };
  const dataOfMonths = [
    { month: 'January', numberOfUsers: 10 },
    { month: 'February', numberOfUsers: 20 },
    { month: 'March', numberOfUsers: 15 },
    { month: 'April', numberOfUsers: 35 },
    { month: 'May', numberOfUsers: 55 },
    { month: 'June', numberOfUsers: 90 },
    { month: 'July', numberOfUsers: 80 },
  ];
  const data = {
    labels: dataOfMonths.map(({ month }) => month),
    datasets: [
      {
        label: 'Visitors',
        data: dataOfMonths.map(({ numberOfUsers }) => numberOfUsers),
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <Stack
      component='section'
      sx={{ marginTop: '25px', position: 'relative', width: '99%' }}
    >
      <Line options={options} data={data} responsive='true' />
    </Stack>
  );
};
export default DashboardChartSection;
