React.js User Authentication Project
This is a simple React.js project for user authentication, featuring signup and login functionalities. The project integrates with an API provided by Biztel.ai, and it was developed as part of the React.js internship assignment.

Project Overview
This project is designed to provide user authentication functionalities, where users can sign up and log in using their credentials. The project leverages React.js for the frontend and communicates with the backend API for user registration and authentication. Material-UI (MUI) is used for designing the user interface.

Technologies Used
Frontend Framework: React.js
UI Library: Material-UI (MUI)
HTTP Client: Axios
Backend API: OpenAPI v3 specification (provided by Biztel.ai)
Features
Signup: Users can register by providing their username, email, password, confirm password, and invite code. The form is validated to ensure proper user input before making an API call.
Login: Users can authenticate by logging in using their email and password.
API Integration: Integrated with the backend APIs for both signup and login functionalities.
Error Handling: Displays error messages to users in case of invalid input or failed API requests.
How to Set Up and Run Locally
1. Clone the Repository
First, clone the repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/react-authentication-project.git
2. Install Dependencies
Navigate to the project directory and install the required dependencies.

bash
Copy code
cd react-authentication-project
npm install
3. Set Up Environment Variables
The project uses Axios to make API requests. The base API URL is already set in the api.js file. However, if you'd like to set up a custom API URL or any other configuration, create a .env file in the root directory with the following structure:

bash
Copy code
REACT_APP_API_URL=http://bffapi.biztel.ai:8080/api/auth
4. Run the Application
To run the application locally, use the following command:

bash
Copy code
npm start
This will start the development server, and you can access the app at http://localhost:3000 in your browser.

5. Testing the Application
Once the application is running, you can test the login and signup functionality. Please note that the signup feature requires a valid invite code, which is not provided with the current project setup. You can test the login functionality with your credentials if the backend allows it.

API Integration
Signup API
Endpoint: /signup
Method: POST
Request Body:
json
Copy code
{
  "username": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string",
  "inviteCode": "string"
}
Error Handling:
If the API returns an error, the frontend will display an error message to the user. For example, if the invite code is invalid, the user will receive the message:
"Invalid invite code".
Login API
Endpoint: /login
Method: POST
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Error Handling:
If the credentials are incorrect, the error message will be displayed:
"Invalid credentials". If any other error occurs, a generic error message is shown.
Error Handling in Frontend
The application uses state management to handle alerts and error messages. If any form input is invalid or if an API request fails, a corresponding error message is shown to the user. The error handling approach ensures that users receive immediate feedback and can take corrective actions.

The AlertMessage component is used to display success and error messages in the UI. It takes in parameters such as the alert type (error, success) and the message content. This ensures that all notifications are centralized and reusable throughout the application.

Challenges
Invite Code Dependency: The API requires an invite code to complete the signup process, but no valid invite code was provided, preventing full testing of the signup functionality.
Testing Limitations: Since the invite code is essential, the signup functionality couldn't be fully tested, but the rest of the features (like form validation and login) have been implemented and tested successfully.
Future Enhancements
Add proper handling and validation for various API error codes.
Implement token-based authentication (JWT) to manage user sessions.
Add unit tests for API calls and form validation logic.
License
This project is licensed under the MIT License.