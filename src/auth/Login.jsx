import React from 'react'
import  { useState, useRef } from 'react';
import './login.css'
import logo from '../assets/images/logo.svg'

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        if (passwordType === 'password') {
        setPasswordType('text');
        setShowPassword(true);
        } else {
        setPasswordType('password');
        setShowPassword(false);
        }
    };

  return (
    <div>
        <main className="login-content-box">
        <div className="login-content">
            <div className="login-heading">
                <img src={logo}  alt=""/>
            </div>
            <form className="login__form" method="post" action="">
                <div className="login__form-wrapper">
                    <h1>Welcome Back !</h1>
                    <p>Sign in to continue to Eduminds Learning.</p>
                    <div className="login__field-group">
                        <label className="login__label" htmlFor="user-email">Username or Email</label>
                        <input className="input-field" id="user-email" type="text" name="user_email" placeholder="Please Enter Your Email"/>
                    </div>
                    <div className="login__field-group password-field mt-3">
                        <label className="login__label" htmlFor="password">Password</label>
                        <input className="input-field" id="fakePassword" type="password" name="password" placeholder="Please Enter Your Password"/>
                        <span><i id="toggler"className="far fa-eye"></i></span>
                    </div>
                    <div className="login__field-group login__field-group--horz">
                        <label className="login__label login__label--horz">
                            <input className="login__checkbox" type="checkbox" name="remember_me"/>
                            <span>Remember me</span>
                        </label>
                        <a href="#">Forgot password</a> 
                    </div>
                    <button className= "login__btn" type="button" data-login="false" >
                        <span className="login__btn-label">Sign in</span>
                        <span className="login__btn-spinner"></span>
                    </button>
                    <p className="login__sign-up">Don’t have an account? <a href="#">Sign up</a></p>
                </div>
            </form>
            <div className="login-lower-heading">
                <p>© <span data-year>2026</span> Eduminds Learning. All rights reserved.</p>
            </div>
        </div>
        <div className="login-content right">
            <div className="login-bg-img">
                <div className="login__testimonial">
                    <div className="login-text">
                        <h4> <q> Assduff Jekyll has helped us kick-start projects in a bang and save thousands of hours of work. </q> </h4>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Login