import { Drawer, Toolbar, Divider } from '@mui/material';
import SidebarList from './sidebar-list/sidebar-list';
const drawerWidth = 240;
const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar />

      <Divider />
      <SidebarList />
    </Drawer>
  );
};
export default Sidebar;
