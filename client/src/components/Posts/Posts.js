import React from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Post from "./Post/Post";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

const Posts = () => {
  const posts = useSelector((state) => state.posts);  // state.posts is coming from reducers/posts.js
  const classes = useStyles();

  console.log(posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}

      </Grid>
    )
  )
}

export default Posts;