import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { createPost, updatePost } from "../../actions/posts";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: 'none',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  buttonClear: {
    marginBottom: 10,
  }
}));

const Form = ({ currentId }) => {
  const [postData, setPostData] = useState({
    person: "", promise: "", summary: "", tags: "", selectedFile: "",
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  }

  const clear = () => {
    setPostData({ person: "", promise: "", summary: "", tags: "", selectedFile: "" })
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Submit a Promise</Typography>
        <TextField
          name="person"
          variant="outlined"
          label="Person"
          fullWidth
          value={postData.person}
          onChange={(e) => setPostData({ ...postData, person: e.target.value })}
        />
        <TextField
          name="promise"
          variant="outlined"
          label="Promise"
          fullWidth
          value={postData.promise}
          onChange={(e) => setPostData({ ...postData, promise: e.target.value })}
        />
        <TextField
          name="summary"
          variant="outlined"
          label="Summary"
          fullWidth
          value={postData.summary}
          onChange={(e) => setPostData({ ...postData, summary: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>

      </form>
    </Paper>
  )
}

export default Form;