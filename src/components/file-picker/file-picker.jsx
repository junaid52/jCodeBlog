'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Stack, Typography } from '@mui/material';
import { uploadFile } from '@/app/lib/actions/actions';
export default function FilePicker({ formik }) {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles(files);
    const sendFile = async () => {
      const formData = new FormData();
      formData.set('file', files[0]);
      const { image } = await uploadFile(formData);
      formik.setFieldValue('image', image);
    };
    sendFile();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
    multiple: false,
  });
  const thumbs = files.map((file) => (
    <img
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        objectFit: 'cover',
      }}
      src={file.preview}
      // Revoke data uri after image is loaded
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Stack
      component='label'
      htmlFor='input-file'
      {...getRootProps({
        className: 'dropzone',
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        sx: {
          border: (theme) =>
            files.length > 0
              ? '0'
              : theme.palette.mode !== 'dark'
              ? '2px dotted rgba(0,0,0,0.23)'
              : '4px dotted rgba(255,255,255,0.23)',
          borderRadius: '4px',
          width: '250px',
          height: '250px',
          padding: files.length > 0 ? '0' : '15px',
        },
      })}
    >
      <input
        type='file'
        {...getInputProps()}
        id='input-file'
        name='file'
        style={{ display: 'block', width: '0', height: '0' }}
      />

      {files.length > 0 ? (
        thumbs
      ) : isDragActive ? (
        <Typography>Drop the files here ...</Typography>
      ) : (
        <Typography variant='body1'>
          Drag 'n' drop some files here, or click to select files
        </Typography>
      )}
    </Stack>
  );
}
