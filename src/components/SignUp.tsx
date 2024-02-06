'use client';
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        size='small'
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        size='small'

      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        size='small'

      />
      <Button variant="contained" color="primary" fullWidth onClick={() => alert('signup')} >
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;