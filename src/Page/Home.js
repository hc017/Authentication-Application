import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to BizIntel
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
