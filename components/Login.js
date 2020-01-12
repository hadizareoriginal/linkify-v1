import React from "react";
import "../componentStyle/login.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

function Login() {
  return (
    <div id="login">
      {/* <div id="description">
        <p>login furom</p>
      </div> */}
      <Grid container spacing={3} id="box">
        <Grid item xs={6}>
          <Paper id="description">xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper id="description">xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
