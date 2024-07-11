import { Grid } from '@mui/material';
import DashboardCard from '../dashboard-card/dashboard-card';

const DashboardCardsSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <DashboardCard title='users' type='users' value='20' />
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='posts' type='posts' value='80' />
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='pages' type='pages' value='4' />
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='visitors' type='visitors' value='100' />
      </Grid>
    </Grid>
  );
};
export default DashboardCardsSection;
