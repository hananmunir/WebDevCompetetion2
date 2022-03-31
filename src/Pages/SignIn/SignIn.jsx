import { Link } from "react-router-dom";
import { TextFields } from "@mui/icons-material";
import React from "react";
import { TextField } from "@mui/material";
import "./SignIn.css";

function Signup({ setIsSignIn }) {
  return (
    <div className='sign-in-container'>
      <div className='sign-in-modal'>
        <span className='sign-in-title'>Sign In</span>
        <div className='input-fields'>
          <input
            type='text'
            className='input-field'
            placeholder='Email or phone Number'
          />
          <input
            type='password'
            className='input-field'
            placeholder='Password'
          />
        </div>
        <button className='sign-in-btn'> <Link to={"/home"} style={{ textDecoration: "none", color: "#fff" }}>
            {" "}
            Sign In{" "}
          </Link></button>
        <div className='help-texts'>
          <div className='checkbox-div'>
            <input type='checkbox' checked name='Remember Me' id='' />
            <label for='vehicle2'> Remember Me</label>
          </div>

          <span className='help-text'>Need Help?</span>
        </div>
        <span style={{ color: "gray" }}>
          New to Netflix?{" "}
          <span
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up Now
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default Signup;
