import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import apiClient from '../Services/api';

// Signup component for user registration
function Signup() {
  // State to manage form data, error messages, and loading status
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  });
  const [error, setError] = useState(''); // Holds error messages for display
  const [loading, setLoading] = useState(false); // Indicates if the form submission is in progress

  // Updates form data state as user inputs values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if passwords match before sending data to the server
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      setLoading(true); // Set loading state to true during API call
      // Send form data to the signup API endpoint
      const response = await apiClient.post('/signup', formData);
      alert(response.data.message || 'Signup successful'); // Notify the user of success

      // Reset form fields after successful signup
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        inviteCode: '',
      });
    } catch (err) {
      // Capture and display error message from API response
      setError(err.response?.data?.errorMessage || 'An error occurred');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    // Render a form for user signup
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
      {/* Error message display */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Submit button */}
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </Box>
  );
}

export default Signup;
