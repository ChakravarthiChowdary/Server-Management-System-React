import { Container, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import ServerTable from "../components/ServerTable";
import ServerForm from "../components/ServerForm";

const Home = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} sx={{ marginTop: 8 }}>
            <ServerTable />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, marginTop: 8 }} elevation={3}>
              <ServerForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
