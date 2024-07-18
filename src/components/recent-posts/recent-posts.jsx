import {
  Typography,
  Box,
  Stack,
  Button,
  Card,
  CardMedia,
  Paper,
} from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const RecentPosts = () => {
  let posts = [];
  for (let i = 1; i < 5; i++) {
    const element = (
      <Card sx={{ marginTop: '30px' }}>
        <Stack direction='row' gap='15px'>
          <Card sx={{ position: 'relative', width: '150px', height: '100px' }}>
            <Image src='/assets/jsPic.jpg' fill />
          </Card>
          <Box>
            <Typography
              component='h6'
              variant='h6'
              sx={{ paddingTop: '10px', marginBottom: '5px' }}
            >
              How closures works in Javascript
            </Typography>
            <Stack direction='row' columnGap='15px' sx={{ fontSize: '14px' }}>
              <Stack direction='row' columnGap='5px'>
                <ModeCommentOutlinedIcon sx={{ fontSize: '20px' }} />
                60 comments
              </Stack>
              <Stack direction='row' columnGap='5px'>
                <VisibilityOutlinedIcon sx={{ fontSize: '20px' }} />
                100 visitors
              </Stack>
              <Stack direction='row' columnGap='5px' sx={{ cursor: 'pointer' }}>
                <EditOutlinedIcon sx={{ fontSize: '20px' }} />
                Edit
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Card>
    );
    posts.push(element);
  }
  return (
    <Box component='section' sx={{ marginTop: '60px' }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography component='h5' variant='h5' sx={{ color: 'inherit' }}>
          Recent Posts
        </Typography>
        <Button variant='outlined' startIcon={<AddIcon />}>
          Add Post
        </Button>
      </Stack>
      {posts}
    </Box>
  );
};
export default RecentPosts;
