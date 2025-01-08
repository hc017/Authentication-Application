import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import apiClient from '../Services/api';
import AlertMessage from './AlertMessage'; // Import AlertMessage component for user notifications

// Signup component for user registration
function Signup() {
  // State for managing form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  });

  // State for managing alert messages (open, type, and message content)
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });

  // State for managing loading status during form submission
  const [loading, setLoading] = useState(false);

  // Handles input changes and updates formData state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission logic, including validation and API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (formData.password !== formData.confirmPassword) {
      setAlert({ open: true, type: 'error', message: 'Passwords do not match!' });
      return;
    }

    try {
      setLoading(true); // Set loading state to true while API call is in progress

      // Send signup data to the API
      const response = await apiClient.post('/signup', formData);

      // Display success alert and reset form fields
      setAlert({ open: true, type: 'success', message: response.data.message || 'Signup successful' });
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        inviteCode: '',
      });
    } catch (err) {
      // Display error alert with API error message or generic fallback
      setAlert({ open: true, type: 'error', message: err.response?.data?.errorMessage || 'An error occurred' });
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  // Handles closing the alert message
  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    // Render signup form with MUI components for styling and functionality
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      {/* Username input field */}
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {/* Email input field */}
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {/* Password input field */}
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {/* Confirm Password input field */}
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {/* Invite Code input field */}
      <TextField
        label="Invite Code"
        name="inviteCode"
        value={formData.inviteCode}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {/* Submit button */}
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>
      {/* AlertMessage component for displaying success or error messages */}
      <AlertMessage
        open={alert.open}
        type={alert.type}
        message={alert.message}
        onClose={handleAlertClose}
      />
    </Box>
  );
}

export default Signup;
