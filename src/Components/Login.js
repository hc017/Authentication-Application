import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import apiClient from '../Services/api';

// Login component for user authentication
function Login() {
  // State to manage form data, error messages, and loading status
  const [formData, setFormData] = useState({ email: '', password: '' });
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
    try {
      setLoading(true); // Set loading state to true during API call
      // Send form data to the login API endpoint
      const response = await apiClient.post('/login', formData);
      alert(`Welcome ${response.data.username}`); // Display a welcome message on success

      // Reset form fields after successful login
      setFormData({ email: '', password: '' });
    } catch (err) {
      // Capture and display error message from API response
      setError(err.response?.data?.errorMessage || 'Invalid credentials');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    // Render a form for user login
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
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
      {/* Error message display */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Submit button */}
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
}

export default Login;
