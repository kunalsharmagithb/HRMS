import React from 'react'

const Forgetpass = () => {
  return (
    <main class="login-content-box">
        <div class="login-content">
            <div class="login-heading">
                <img src="images/logo.svg"  style={{filter: "brightness(0) saturate(100%) invert(21%) sepia(87%) saturate(2908%) hue-rotate(221deg) brightness(92%) contrast(106%)"}} alt=""/>
            </div>
            <form class="login__form" method="post" action="">
                <div class="login__form-wrapper">
                    <h1> Create New password !</h1>
                    <p>Your New Password Must Be Different from Previous Used Password</p>

                    <div class="login__field-group password-field password" id="password1">
                        <label class="login__label" for="password">Password</label>
                        <input class="input-field password-input" type="password" name="password" placeholder="Please Enter Your Password"/>
                        <span class='hide' onclick="return togglePasswordVisibility('password1')"></span>
                    </div>

                    <div class="login__field-group password-field password mt-3" id="password2">
                        <label class="login__label" for="password">Confirm Password</label>
                        {/* <input class="input-field password-input" type="password" name="password" placeholder="Please Enter Your Password"/> */}
                        <span class='hide' onclick="return togglePasswordVisibility('password2')"></span>
                    </div>

                    <div class="login__field-group login__field-group--horz">
                        <label class="login__label login__label--horz">
                            {/* <input class="login__checkbox" type="checkbox" name="remember_me"> */}
                            <span>Remember me</span>
                        </label>
                    </div>
                    <button class="login__btn" type="button" data-login="false">
                        <span class="login__btn-label">Reset Password</span>
                        <span class="login__btn-spinner"></span>
                    </button>
                    <p class="login__sign-up">Wait, I remember my password... &nbsp;<a href="#">Click Here</a></p>
                </div>
            </form>
            <div class="login-lower-heading">
                <p>© <span data-year>2023</span> Eduminds Learning. All rights reserved.</p>
            </div>
        </div>
        <div class="login-content right">
            <div class="login-bg-img-type-2">
                <div class="login__testimonial">
                    <div class="login-text">
                        <h4> <q> Assduff Jekyll has helped us kick-start projects in a bang and save thousands of hours of work. </q> </h4>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Forgetpass
