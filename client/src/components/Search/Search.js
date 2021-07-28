import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { makeStyles } from '@material-ui/core/styles';
import { getPostsBySearch } from "../../actions/posts"

const useStyles = makeStyles((theme) => ({
  testy: {
    boxShadow: 'none',
  },
  gridContainer: {
    marginTop: '50px',

    boxShadow: 'none',
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    boxShadow: 'none',
  },
  searchButton: {
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
  }
}));


const Search = () => {
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {    // 13 is the enter key
      searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag])
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Paper className={classes.testy}>
      <Container maxWidth="xl" >
        <Grid container justifyContent="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Typography variant="h6">Search for a Person</Typography>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <TextField
              name="search"
              variant="outlined"
              label="Search Persons"
              fullWidth
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ChipInput
              style={{ margin: "10px 0" }}
              value={tags}
              onAdd={handleAdd}
              onDelete={handleDelete}
              label="Search tags"
              variant="outlined"
            />
            <Button onClick={searchPost} size="large" className={classes.searchButton} variant="contained">Search</Button>
          </AppBar>
        </Grid>
      </Container>
    </Paper>
  )



}


export default Search;