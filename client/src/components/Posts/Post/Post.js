import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";

import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost, dislikePost } from "../../../actions/posts"

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.person} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.person}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.promise} variant="h5" gutterBottom>{post.promise}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.summary}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" onClick={() => dispatch(dislikePost(post._id))}>
          <ThumbDownAltIcon fontSize="small" />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </Button>

        <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;