import React from "react";
import { Button, Box, Typography } from "@mui/material"; // Import Material-UI components
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation between routes

// Home component: Serves as the landing page for the application
const Home = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  return (
    // Center the content on the page using Box with styling
    <Box sx={{ textAlign: "center", mt: 10 }}>
      {/* Heading for the landing page */}
      <Typography variant="h3" gutterBottom>
        Welcome to BizIntel
      </Typography>
      <Box>
        {/* Button to navigate to the Login page */}
        <Button
          variant="contained" // Primary button style
          color="primary"
          sx={{ mr: 2 }} // Add right margin for spacing
          onClick={() => navigate("/login")} // Navigate to "/login" when clicked
        >
          Login
        </Button>
        {/* Button to navigate to the Sign-Up page */}
        <Button
          variant="outlined" // Outlined button style for secondary action
          color="primary"
          onClick={() => navigate("/signup")} // Navigate to "/signup" when clicked
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Home; // Export Home component for use in other parts of the application
