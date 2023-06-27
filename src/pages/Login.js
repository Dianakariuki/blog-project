import React from "react";
import {auth,provider} from "../firebase-configure";

function Login() {
    return (
      <div className="loginPage">
       <p>Sign With Google to Continue</p>
       <button className="login-with-google-btn">Sign in with Google</button>
      </div>
    );
  }
  
  export default Login;
  