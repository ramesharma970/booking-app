import React, { useState } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

//css
import './Signup.css';

//components
import NavBar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Signup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    console.log(userData, 'userData');
    // Dispatch the signup action with the username and password
    dispatch(signup(userData));
    // Implement your signup logic here
    // Send the username and password to the server for processing

    setUsername('');
    setPassword('');
  };

  const handleSignupWithGoogle = () => {
    // Implement your Google account signup logic here
    // Redirect the user to the appropriate authentication page
  };

  return (
    <div>
      <NavBar />
      <div className="signup" id="signup">
        <h1 className="text-center">Signup Here</h1>
        <div className="container ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p>Or signup with your Google account:</p>
            <button className="btn btn-danger" onClick={handleSignupWithGoogle}>
              Signup with Google
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
