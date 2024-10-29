'use client';
import { useRef, useEffect, forwardRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Box } from '@mui/material';
const Editor = ({ innerRef }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container;

    if (innerRef.current === null) {
      container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div')
      );
      innerRef.current = new Quill(editorContainer, {
        theme: 'snow',
      });
    }

    const quill = innerRef.current;
  }, [innerRef]);

  return (
    <Box
      ref={containerRef}
      sx={{
        '& .ql-container': {
          height: '400px',
          borderColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.23)'
              : 'rgba(0,0,0,0.23)',
        },
        '& .ql-toolbar': {
          borderColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.23)'
              : 'rgba(0,0,0,0.23)',
        },
      }}
    ></Box>
  );
};
export default Editor;
