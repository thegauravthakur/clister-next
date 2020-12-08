import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import Link from 'next/link';

const Footer = () => {
  return (
    <Paper style={{width: '100%', marginTop: '50px'}}>
      <Typography
        align="center"
        style={{
          fontSize: '1rem',
          lineHeight: 1.5,
          paddingTop: '1rem',
          paddingBottom: '1rem'
        }}
      >
        © 2020 Copyright: <a target="_blank"
                             rel="noopener noreferrer"
                            style={{color: '#1DA1F2', textDecoration: 'none'}} href={'https://gauravthakur.in'}>Gaurav Thakur</a> | Made with
        <span style={{color: 'red', fontSize: '22px'}}>❤</span> in India
      </Typography>
    </Paper>
  );
};
export default Footer;
