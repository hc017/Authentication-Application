import React from "react"; // Import React library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// Import necessary components from react-router-dom for routing
import Signup from "./Components/Signup"; // Import the Signup component
import Login from "./Components/Login"; // Import the Login component
import Home from "./Page/Home"; // Import the Home component

// Define the main App component with routing configuration
const App = () => (
  <Router>
    {/* Define all application routes within the Router */}
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<Home />} />
      {/* Route for the signup page */}
      <Route path="/signup" element={<Signup />} />
      {/* Route for the login page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

// Export the App component for rendering in the root file
export default App;
