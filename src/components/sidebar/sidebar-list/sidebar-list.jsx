'use client';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from './constants';
const SidebarList = () => {
  const pathname = usePathname();
  return (
    <List>
      {links.map((link, index) => (
        <ListItem key={link.id} disablePadding>
          <ListItemButton
            color='primary'
            LinkComponent={Link}
            href={link.url}
            selected={pathname === link.url}
            sx={{
              '&.Mui-selected': {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default SidebarList;
