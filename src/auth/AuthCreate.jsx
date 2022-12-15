import React, { useState } from "react";
import { createNewUser } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import { set } from "firebase/database";
import { usersRef } from "../firebase/database";

const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function AuthCreate() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateNewUser = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    createNewUser(data.get("email"), data.get("password"))
      .then(({ user }) => {
        set(usersRef, {
          UID: user.uid,
          email: user.email,
          favouriteGyms: [],
        });
        navigate("/login");
      })
      .catch(({ message }) => {
        console.log(error);
        setError(message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleCreateNewUser}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography component="h1" variant="h5">
              Create Your Account!
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Submit
            </Button>
            <Typography>
              Already have an account? <Link to="/login">Login Here</Link>
            </Typography>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
