import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Login() {
  // Define state variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Send a POST request with form data
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      // Handle success
      setSuccess('Login successful!');
      console.log(response.data); // You might want to save the token and redirect the user here
    } catch (error) {
      // Handle error
      setError('Login failed. Please check your credentials.');
      console.error("Login error ", error);
    }
  };

  return (
    <div className='login-page'>
      {/* header section start */}
      <header className='h-100 min-vh-100 text-light'>
        <div className="container h-100 d-flex text-light">
          <div className='heading'>
            <h1 className='text-center fw-semibold'>Login</h1>
          </div>
        </div>
        <div className='signup-form'>
          <div className='container justify-content-center'>
            <Form id='login-form' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <p>Don't have an account? <a href='/signup'>Signup</a></p>
              <Button variant="danger btn-lg" type="submit">Login</Button>

              {/* Display success or error message */}
              {error && <div className='alert alert-danger mt-3'>{error}</div>}
              {success && <div className='alert alert-success mt-3'>{success}</div>}
            </Form>
          </div>
        </div>
      </header>
      {/* header section end */}
    </div>
  );
}

export default Login;
