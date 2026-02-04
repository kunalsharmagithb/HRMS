import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './login.css'
import logo from '../assets/images/logo.svg'
import Link from '@mui/material/Link';

const Login = () => {
        const [showPassword, setShowPassword] = React.useState(false);

        const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };

        const handleMouseUpPassword = (event) => {
            event.preventDefault();
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
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Username" variant="outlined" className="input-fields"/>
                        </Box>
                    </div>
                    <div className="login__field-group password-field mt-3">
                        <label className="login__label" htmlFor="password">Password</label>
                        <FormControl fullWidth sx={{  }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        <Link href="/Forget">Forgot password</Link> 
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