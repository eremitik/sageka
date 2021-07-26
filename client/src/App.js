import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import shinzo from "./images/shinzo_abe.jpg";
import Persons from "./components/Persons/Persons";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Shinzo Abe</Typography>
        <img src={shinzo} alt="memories"/>



      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Persons />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}