import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/'); // Redirect to home page
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate('/'); // Redirect to home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="placeholder_image_url_here" // Replace with your logo URL
          alt="Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login_signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Eshop Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button
          className="login_registerButton"
          onClick={register}
        >
          Create your Eshop Account
        </button>
      </div>
    </div>
  );
}

export default Login;