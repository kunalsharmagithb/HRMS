import React from 'react'
import logo from '../assets/images/logo.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Mailsender = () => {
  return (
    <main className="login-content-box">
        <div className="login-content">
            <div className="login-heading">
                <img src={logo}   alt=""/>
            </div>
            <div className="login__form" method="post" >
                <div className="login__form-wrapper">
                    <h1>Forget Password ?</h1>
                    <p>Enter Your Email and Instructions will be sent to you !</p>
                    <div className="login__field-group">
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Username" variant="outlined" className="input-fields"/>
                        </Box>
                    </div>
                    <a href="/Otp">
                      <button className="login__btn mt-4" type="button" data-login="false">
                          <span className="login__btn-label">Sent Reset Link</span>
                          <span className="login__btn-spinner"></span>
                      </button> 
                    </a>
                    <p className="login__sign-up"> Wait, I Remember My Password... &nbsp; <a href="/">Click Here</a></p>
                </div>
            </div>
            <div className="login-lower-heading">
                <p>© <span data-year>2026</span> Eduminds Learning. All rights reserved.</p>
            </div>
        </div>
        <div className="login-content right">
            <div className="login-bg-img-type-3">
                <div className="login__testimonial">
                    <div className="login-text">
                        <h4> <q> Don’t worry resetting your password is quick and safe. </q> </h4>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Mailsender