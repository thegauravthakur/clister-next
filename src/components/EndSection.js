import React from 'react';
import {Button, Grid, Typography, useTheme} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const EndSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  return (
    <motion.div
      ref={ref}
      animate={{opacity: inView ? 1 : 0}}
      transition={{duration: 1}}
    >
      <Grid justify={'center'} container style={{marginTop: '100px'}}>
        <Grid item sm={3}/>
        <Grid
          spacing={isMobile ? 0 : 2}
          alignItems={'center'}
          item
          sm={6}
          container
          direction={'column'}
        >
          <Grid item>
            <Typography
              align={'center'}
              style={{fontFamily: 'Fredoka One, cursive'}}
              variant={'h4'}
            >
              So, what are you waiting for?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={'center'}
              style={{
                fontFamily: 'Courier Prime, monospace',
                margin: isMobile ? '20px 0px 20px 0px' : 0
              }}
            >
              CLister will make you more organized and productive. You can manage all your related tasks in sections and
              create different sections for a different type of chores. Join Us by creating an account right now.
              Believe me, it will only take your 30 seconds.
            </Typography>
          </Grid>
          <Grid item>
            <Button  onClick={() => {
              window.location.href = 'https://app.clister.in/signup';
            }} variant="outlined">
              Create Account
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={3}/>
      </Grid>
    </motion.div>
  );
};
export default EndSection;
