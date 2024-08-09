'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FormControl } from '@mui/material';
import CustomizedTextField from '@/components/customized-text-field/customized-text-field';
import { Button, Stack, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilePicker from '@/components/file-picker/file-picker';
import { createNewPost } from '@/app/lib/actions/actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Editor from '@/components/editor/editor';
// const Editor = dynamic(import('@/components/editor/editor'), {
//   ssr: false,
// });

export default function Page() {
  const [showEditor, setShowEditor] = useState(false);
  const editorRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      slug: Yup.string().required('Slug is required'),
      image: Yup.string().required('Image is required'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      const delta = editorRef.current.getContents();
      values.content = delta;

      createNewPost(JSON.stringify(values));
    },
  });
  useEffect(() => {
    if (window) {
      setShowEditor(true);
    }
  }, []);

  return (
    <>
      <form id='post-form' onSubmit={formik.handleSubmit}>
        <Stack direction='row' justifyContent='space-between' mb={5}>
          <Typography component='h6' variant='h6'>
            Create Post
          </Typography>
          <Button variant='contained' startIcon={<AddIcon />} type='submit'>
            Add Post
          </Button>
        </Stack>
        <Stack direction='row' gap='15px'>
          <Box flexGrow='1'>
            <FormControl fullWidth sx={{ marginBottom: '15px' }}>
              <CustomizedTextField
                onChange={formik.handleChange}
                value={formik.values.title}
                id='title'
                label='Title'
                name='title'
                variant='outlined'
                placeholder='Title'
                sx={{ '&focus': { color: 'blue' } }}
              />
              {formik.touched.title && formik.errors.title ? (
                <Box
                  sx={{
                    color: (theme) => theme.palette.error.main,
                    fontSize: '14px',
                    marginTop: '5px',
                  }}
                >
                  {formik.errors.title}
                </Box>
              ) : null}
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '15px' }}>
              <CustomizedTextField
                onChange={formik.handleChange}
                value={formik.values.slug}
                id='slug'
                label='Slug'
                name='slug'
                variant='outlined'
                placeholder='Slug'
                sx={{ '&focus': { color: 'blue' } }}
              />
              {formik.touched.slug && formik.errors.slug ? (
                <Box
                  sx={{
                    color: (theme) => theme.palette.error.main,
                    fontSize: '14px',
                    marginTop: '5px',
                  }}
                >
                  {formik.errors.slug}
                </Box>
              ) : null}
            </FormControl>

            {showEditor && <Editor ref={editorRef} />}
          </Box>
          <Box flexBasis='250px'>
            <FilePicker formik={formik} />
            {formik.touched.image && formik.errors.image ? (
              <Box
                sx={{
                  color: (theme) => theme.palette.error.main,
                  fontSize: '14px',
                  marginTop: '5px',
                }}
              >
                {formik.errors.image}
              </Box>
            ) : null}
          </Box>
        </Stack>
      </form>
    </>
  );
}
