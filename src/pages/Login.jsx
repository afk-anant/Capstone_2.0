import React from 'react';
import '../styles/styles.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://accounts.pwskills.com/images/signin-banner.svg"
          className="login-image"
        />
      </div>

      <div className="login-right">
        <img
          src="/pwskills-logo.svg"
          className="logo"
        />

        <h2>Get Onboard and jumpstart your career!</h2>
        <p>Please enter your phone number to login/register</p>

        <div className="phone">
        <div className="country-code">
            <select className="country-code-select" defaultValue="+91">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
            </select>
        </div>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            maxLength="10"
            required
          />
        </div>

        <button className="send-otp">Send OTP</button>

        <div className="or-divider">OR</div>

        <button className="google-login">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;