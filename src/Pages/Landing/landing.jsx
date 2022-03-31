import React, { useState } from "react";
import landingImg from "../../images/landing.jpg";
import SignIn from "../SignIn/SignIn";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Landing.css";
export default function Landing() {
  const [isSignin, setIsSignin] = useState(false);
  const switchMode = () => {
    setIsSignin((prevState) => !prevState);
  };
  return (
    <div>
      <img src={landingImg} className='landing-img'></img>
      <div className='landing-navbar'>
        <img
          style={{ cursor: "pointer" }}
          className='nav-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
          alt='Netflix Logo'
        />
        {!isSignin && (
          <button className='sign-up-btn m-0' onClick={switchMode}>
            Sign In
          </button>
        )}
      </div>
      {isSignin ? (
        <SignIn setIsSignIn={setIsSignin} />
      ) : (
        <div className='landing-text'>
          <span className='landing-text-heading'>
            Unlimited Movies Tv's Shows and more
          </span>
          <span className='landing-text-subtitles'>
            Ready to watch? enter your email to create or restart your
            membership
          </span>
          <InputGroup
            style={{ padding: ".4rem" }}
            className='mb-3 my-landing-btn'
          >
            <FormControl
              placeholder='Email Address'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
            <InputGroup.Text
              style={{
                padding: ".6rem 1rem",
                backgroundColor: "#e50914",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
              id='basic-addon2'
              className='m-0'
            >
              GET STARTED
            </InputGroup.Text>
          </InputGroup>
        </div>
      )}
    </div>
  );
}
