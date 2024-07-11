'use client';
import { styled } from '@mui/material/styles';
import { Paper, Stack, Box, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStoriesOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';

const icons = {
  users: PeopleIcon,
  pages: AutoStoriesIcon,
  posts: ArticleIcon,
  visitors: VisibilityIcon,
};
const CustomizedPaper = styled(Paper)(({ theme }) => {
  return {
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  };
});
const DashboardCard = ({ title, type, value }) => {
  const Icon = icons[type];
  return (
    <CustomizedPaper>
      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ padding: '0 20px' }}
        spacing={2}
      >
        <Icon
          sx={{
            fontSize: '60px',
            color: (theme) => theme.palette.primary.main,
          }}
        />
        <Box>
          <Typography component='h4' variant='h4'>
            {value}
          </Typography>
          <Typography component='h6' variant='h6' textTransform='capitalize'>
            {title}
          </Typography>
        </Box>
      </Stack>
    </CustomizedPaper>
  );
};

export default DashboardCard;
