# React.js User Authentication Project

This is a simple React.js project for user authentication, featuring signup and login functionalities. The project integrates with an API provided by Biztel.ai and was developed as part of a React.js internship assignment.

---

## Project Overview

This project is designed to provide user authentication functionalities where users can sign up and log in using their credentials. It leverages React.js for the frontend and communicates with the backend API for user registration and authentication. Material-UI (MUI) is used for designing the user interface.

---

## Technologies Used

- **Frontend Framework:** React.js  
- **UI Library:** Material-UI (MUI)  
- **HTTP Client:** Axios  
- **Backend API:** OpenAPI v3 specification (provided by Biztel.ai)

---

## Features

- **Signup:** Users can register by providing their username, email, password, confirm password, and invite code. The form is validated to ensure proper user input before making an API call.  
- **Login:** Users can authenticate by logging in using their email and password.  
- **API Integration:** Integrated with backend APIs for both signup and login functionalities.  
- **Error Handling:** Displays error messages to users in case of invalid input or failed API requests.

---

## How to Set Up and Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-authentication-project.git

### 2. Install Dependencies  
Navigate to the project directory and install the required dependencies:  

```bash
cd react-authentication-project
npm install
```

### 3. Set Up Environment Variables  
Create a `.env` file in the root directory with the following content:  

```env
REACT_APP_API_URL=http://bffapi.biztel.ai:8080/api/auth
```

### 4. Run the Application  
Start the development server using:  

```bash
npm start
```

Access the app at [http://localhost:3000](http://localhost:3000) in your browser.  

### Testing the Application  

- **Signup Functionality:**  
  The signup feature requires a valid invite code (not provided in this setup).  

- **Login Functionality:**  
  Test the login feature with your credentials if the backend allows it.  

### API Integration  

**Signup API**  
- **Endpoint:** `/signup`  
- **Method:** `POST`  
- **Request Body:**  
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string",
  "inviteCode": "string"
}
```

**Login API**  
- **Endpoint:** `/login`  
- **Method:** `POST`  
- **Request Body:**  
```json
{
  "email": "string",
  "password": "string"
}
```

### Error Handling  

- **Invalid invite code:** `"Invalid invite code"`.  
- **Invalid credentials:** `"Invalid credentials"`.  
- **Other errors:** A general error message is displayed.  

### Error Handling in the Frontend  

The application uses state management to handle alerts and error messages. The `AlertMessage` component displays notifications (success or error) based on the context, ensuring centralized and reusable messages.  

### Challenges  

1. **Invite Code Dependency:** The API requires an invite code for signup, which was unavailable, limiting full functionality testing.  
2. **Testing Limitations:** Signup could not be fully tested, but form validation and login features were successfully implemented and tested.  

### Future Enhancements  

1. Add proper handling and validation for various API error codes.  
2. Implement token-based authentication (e.g., JWT) for session management.  
3. Add unit tests for API calls and form validation logic.  

### License  

This project is licensed under the MIT License.  

---
