import { Box } from '@mui/material';
import DashboardCardsSection from '@/components/dashboard-cards-section/dashboard-cards-section';
import DashboardChartSection from '@/components/dashboard-chart-section/dashboard-chart-section';
export default function Dashboard() {
  return (
    <Box sx={{ padding: '20px', flexGrow: '1' }}>
      <DashboardCardsSection />
      <DashboardChartSection />
    </Box>
  );
}
