'use client';
import { useState, useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from '@/app/lib/AuthContext';

import BigBtn from '../bigBtn/BigBtn';

import './loginRegisterForm.scss';

const LoginRegisterForms: React.FC = () => {
  const context = useContext(AuthContext);

  const [activeForm, setActiveForm] = useState<string>('login');

  const handleSwitchForm = (event: React.MouseEvent<HTMLElement>, targetForm: 'login' | 'register') => {
    event.preventDefault();
    setActiveForm(targetForm);
  };

  return (
    <div className="loginRegisterForms-components">
      <div className={`form-container ${activeForm === 'login' ? 'active' : 'inactive'}`} id="login">
        <h4>Login</h4>
        <form>
          <div className="input-cont">
            <label htmlFor="username">Username or email address</label>
            <input
              id="username"
              type="text"
            />
          </div>

          <div className="input-cont">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <div className="checkbox">
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="btns">
            <BigBtn onClick={context.login} title="Login" />
            <Link href="#">Lost Your Password?</Link>
          </div>
          <Link href='#' className='switch' onClick={(e) => handleSwitchForm(e, 'register')}>
            Not a user? Click here to register!
          </Link>
        </form>
      </div>
      <div className={`form-container ${activeForm === 'register' ? 'active' : 'inactive'}`} id="register">
        <h4>Register</h4>
        <form>
          <div className="input-cont">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
            />
          </div>
          <p>A link to set a new password will be sent to your email address.</p>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="/privacy-policy">privacy policy</Link>.</p>
          <BigBtn title="Register" />
          <Link href='#' className='switch' onClick={(e) => handleSwitchForm(e, 'login')}>
            Already a user? Click here to log in!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterForms;
