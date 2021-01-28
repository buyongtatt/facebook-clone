import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import {auth, provider} from './firebase'

function Login() {
  const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result=>{
          console.log(result);
      })
      .catch((error)=>alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
          alt=""
        ></img>
        <img
          src="https://images.squarespace-cdn.com/content/v1/573bf9761bbee0b32db4e9ff/1488170391590-OE9IUIWNSOZLYFCT60S2/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/image-asset.png"
          alt=""
        ></img>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
