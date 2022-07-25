
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();


const SignUp=()=>{
  const [form, setForm] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    adress:"",
    adressNumber:"",
    isAdmin: Boolean
  });
  const navigate = useNavigate();
  
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

 // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newUser = { ...form };
  console.log(newUser);

  await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ email: "", password: "", firstName: "", lastName:"",adress:"",adressNumber:"",isAdmin:Boolean });
  navigate("/");
}

    return(
    <div>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>updateForm({firstName: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>updateForm({lastName: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>updateForm({email: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="adressNumber"
                  label="adressNumber"
                  name="adressNumber"
                  autoComplete="adressNumber"
                  onChange={(e)=>updateForm({adressNumber: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  name="adress"
                  label="adress"
                  type="adress"
                  id="adress"
                  autoComplete="adress"
                  onChange={(e)=>updateForm({adress: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  autoComplete="password"
                  onChange={(e)=>updateForm({password: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
             <Link href="/clientSpace" variant="body2">
                  Sign Up
             </Link>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
        
    </div>
    )
}

export default SignUp;
