import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import { Box } from '@mui/material';
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', paddingTop: '64px' }}>
        <Sidebar />
        <Box sx={{ padding: '20px', flexGrow: '1' }}>{children}</Box>
      </Box>
    </>
  );
}
