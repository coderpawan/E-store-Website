import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src="images/pawan logo.png" alt="logo" className="login_logo" />
      </Link>
      <div className="login_container">
        <div className="login_title">Sign-in</div>
        <form>
          <div className="email">E-mail</div>
          <input
            type="text"
            className="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className="password">Password</div>
          <input
            type="password"
            className="password_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="sign" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <div className="terms">
          By signing-in you agree to the PAWAN's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </div>
        <button className="Create_Account" onClick={register}>
          Create Your Pawan,s Store Account
        </button>
      </div>
    </div>
  );
};

export default Login;
