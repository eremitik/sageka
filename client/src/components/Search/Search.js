import React, { useState } from 'react';
import { Container, Grid, AppBar, TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { getPostsBySearch } from "../../actions/posts"

const useStyles = makeStyles((theme) => ({
  searchPaper: {
    boxShadow: 'none',
  },
  gridContainer: {
    marginTop: '50px',
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    boxShadow: 'none',
  },
  searchField: {
    marginBottom: '10px',
  },
  searchButton: {
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
  }
}));


const Search = () => {
  const [search, setSearch] = useState("")

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {    // 13 is the enter key
      searchPost();
    }
  }

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }))
      history.push(`/posts/search?searchQuery=${search || 'none'}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Paper className={classes.searchPaper}>
      <Container maxWidth="xl" >
        <Grid container justifyContent="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Typography variant="h6">Search for a Person</Typography>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">
            <TextField
              className={classes.searchField}
              name="search"
              autoComplete="off"
              variant="outlined"
              label="Search Persons"
              fullWidth
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={searchPost} size="large" className={classes.searchButton} variant="contained">Search</Button>
          </AppBar>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Search;