import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../assets/images/logo.svg'
import './login.css'

const Forgetpass = () => {
            const [showPassword, setShowPassword] = React.useState(false);
    
            const handleClickShowPassword = () => setShowPassword((show) => !show);
    
            const handleMouseDownPassword = (event) => {
                event.preventDefault();
            };
    
            const handleMouseUpPassword = (event) => {
                event.preventDefault();
            };
  return (
    <main className="login-content-box">
        <div className="login-content">
            <div className="login-heading">
                <img src={logo} alt=""/>
            </div>
            <div className="login__form" method="post" >
                <div className="login__form-wrapper">
                    <h1> Create New password !</h1>
                    <p>Your New Password Must Be Different from Previous Used Password</p>

                    <div className="login__field-group password-field password" id="password1">
                        {/* <label className="login__label" for="password">Password</label> */}
                        <FormControl fullWidth  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className="login__field-group password-field password mt-3" id="password2">
                        {/* <label className="login__label" for="password"> Password </label> */}
                        <FormControl fullWidth  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className="login__field-group login__field-group--horz">
                        <label className="login__label login__label--horz">
                            <input className="login__checkbox" type="checkbox" name="remember_me"/>
                            <span>Remember me</span>
                        </label>
                    </div>
                    <button className="login__btn" type="button" data-login="false">
                        <span className="login__btn-label">Reset Password</span>
                        <span className="login__btn-spinner"></span>
                    </button>
                    <p className="login__sign-up">Wait, I remember my password... &nbsp;<a href="/">Click Here</a></p>
                </div>
            </div>
            <div className="login-lower-heading">
                <p>© <span data-year>2023</span> Eduminds Learning. All rights reserved.</p>
            </div>
        </div>
        <div className="login-content right">
            <div className="login-bg-img-type-2">
                <div className="login__testimonial">
                    <div className="login-text">
                        <h4> <q> Assduff Jekyll has helped us kick-start projects in a bang and save thousands of hours of work. </q> </h4>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Forgetpass
