import dynamic from 'next/dynamic';

import { FormControl } from '@mui/material';
import CustomizedTextField from '@/components/customized-text-field/customized-text-field';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const Editor = dynamic(() => import('@/components/editor/editor'), {
  ssr: false,
});
export default function Page() {
  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: '15px' }}>
        <CustomizedTextField
          id='title'
          label='Title'
          variant='outlined'
          placeholder='Title'
          sx={{ '&focus': { color: 'blue' } }}
        />
      </FormControl>
      <Editor />
      <Stack
        justifyContent='flex-end'
        direction='row'
        sx={{ marginTop: '15px' }}
      >
        <Button variant='contained' startIcon={<AddIcon />}>
          Add Post
        </Button>
      </Stack>
    </>
  );
}
