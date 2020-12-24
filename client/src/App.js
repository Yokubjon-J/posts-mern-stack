import useStyles from './styles.js';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {getPosts} from './actions/posts';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography className={classes.heading} variant='h2' align='center'>My Personal Space</Typography>
        <img className={classes.image} src='https://lh3.googleusercontent.com/yUUdu_rHewJJ-mSSGBr-OJbTBtPkeVcwPHKbSCwfRIu-aFqJwA4QR9rRGX1ltQEkp7vdt2xebbSBWwD10gPaXjfgOC8=w640-h400-e365-rj-sc0x00ffffff'
          alt='picture' height='60'  />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
