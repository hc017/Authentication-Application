import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { signUp } from "../Services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    inviteCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await signUp(formData);
      setSuccess(response.message);
      setError("");
    } catch (err) {
      setError(err.errorMessage || "Signup failed!");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          label="Invite Code"
          name="inviteCode"
          fullWidth
          margin="normal"
          value={formData.inviteCode}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>Sign Up</Button>
      </form>
    </Box>
  );
};

export default Signup;
