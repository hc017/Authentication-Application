import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import apiClient from '../Services/api';
import AlertMessage from './AlertMessage'; // Import AlertMessage component for user notifications

// Login component for user authentication
function Login() {
  // State to manage form data (email and password)
  const [formData, setFormData] = useState({ email: '', password: '' });

  // State to manage alert messages (open status, type, and message content)
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });

  // State to manage loading status during form submission
  const [loading, setLoading] = useState(false);

  // Handle changes in input fields and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the corresponding field in formData
  };

  // Handle form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setLoading(true); // Set loading state to true while processing
      const response = await apiClient.post('/login', formData); // Send login request to the API

      // Display success alert on successful login
      setAlert({ open: true, type: 'success', message: `Welcome ${response.data.username}` });

      // Reset form fields after successful login
      setFormData({ email: '', password: '' });
    } catch (err) {
      // Display error alert on login failure
      setAlert({ open: true, type: 'error', message: err.response?.data?.errorMessage || 'Invalid credentials' });
    } finally {
      setLoading(false); // Reset loading state after processing
    }
  };

  // Handle closing of the alert message
  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    // Render the login form with Material-UI components
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      {/* Email input field */}
      <Typography variant="h4" gutterBottom>Login</Typography>
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
      {/* Submit button */}
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {/* AlertMessage component to display success or error notifications */}
      <AlertMessage
        open={alert.open}
        type={alert.type}
        message={alert.message}
        onClose={handleAlertClose}
      />
    </Box>
  );
}

export default Login;
