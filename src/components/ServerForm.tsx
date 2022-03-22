import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Copyright from "../components/Copyright";
import { InputLabel, MenuItem, Select } from "@mui/material";

const theme = createTheme();

export default function ServerForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            // sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="servername"
                  label="Server Name"
                  name="servername"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="serverdescription"
                  label="Server Description"
                  name="serverdescription"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <InputLabel id="serverstatus">Server Status</InputLabel> */}
                <Select
                  labelId="serverstatus"
                  id="serverstatus"
                  label="Server Status"
                  size="small"
                  fullWidth
                >
                  <MenuItem value={1}>Offline</MenuItem>
                  <MenuItem value={2}>Online</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  labelId="servertype"
                  id="servertype"
                  label="Server Type"
                  size="small"
                  fullWidth
                >
                  <MenuItem value={1}>Development</MenuItem>
                  <MenuItem value={2}>Production</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
