import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    borderRadius: 15,
    boxShadow: 'none',
    margin: '30px 0px 60px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 45,
  },
  image: {
    marginLeft: '15px',
    borderRadius: 15,
  },
})

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Sage-ka ⚖️</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={4}>
                <Form />
                {/* <Filter /> */}
                <Search />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Router>
  )
}