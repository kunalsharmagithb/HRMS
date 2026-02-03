<!doctype html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">
<head>
    <meta charset="utf-8" />
    <title>Login </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <!-- Layout config Js -->
    <script src="assets/js/layout.js"></script>
    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.min.css" rel="stylesheet" type="text/css" />

</head>

<style>
   
   
   
    .login__btn {background-color: #0d4ff1;border-radius: 0;color: hsl(0,0%,100%);cursor: pointer;display: block;margin-bottom: 1.5em;outline: transparent;padding: 10px;position: relative;width: 100%;transition:background-color var(--trans-dur),opacity var(--trans-dur);-webkit-appearance: none;appearance: none;font-size: 17px;line-height: 1.5;border-color: #0d4ff1;border: 1px solid;}
    .login__btn:disabled {cursor: not-allowed;opacity: 0.5;}
    .login__btn:not(:disabled):focus-visible,
    .login__btn:not(:disabled):hover {background-color: #284da7;}
    .input-field-group {margin-bottom: 0.75em;}
    .input-field-group--horz {display: flex;justify-content: space-between;}
    .login__form,.login__form-wrapper {margin: auto;}
    .login__form {padding: 0 1.5em;width: 100%;}
    .login__form-wrapper {max-width: 40em;width: 100%;}
    .login__label {display: block;font-weight: 400;}
    .login__label--horz {font-weight: normal;display: flex;align-items: center;}
    .login__label,.login__label + a,.login__sign-up {font-size: 16px;line-height: 2.5;font-weight: 300;margin: 0;color: #000;}
    .login__testimonial { position: relative; background-image: linear-gradient(hsla(0,0%,0%,0),hsl(222.97deg 89.8% 50% / 58%)); height:100%; border-radius: 0;margin-top: auto;padding: 40px 20px;width: 100%;color: #fff;}
    .login__testimonial h4 {font-size: 22px;line-height: 1.4;font-weight: 400;color:#fff}
    .input-field {padding: 10px 15px;width: 100%;height: 50px;font-size: 14px;border: 1px solid #000;}
    .login-heading {padding:20px;}
    .login-lower-heading {padding:20px;}
    .login-content {flex-direction: column;overflow-y: auto;}
    .login-content-box,.login-bg-img,.login-content {display: flex;justify-content: space-between;}
    .login-bg-img {background-image: url(assets/images/login-bg.jpg);background-repeat:no-repeat;background-position: top;background-size: cover;border-radius: 0;margin: 20px;height: 100%;}
    .login-content-box,.login-content {width: 100%;height: 100vh; background:#fff;}
    .login__field-group.login__field-group--horz {display: flex;justify-content: space-between;margin: 20px 0;}
    .login__form-wrapper h1 {font-size: 30px;line-height: 1.2;font-weight: 500;margin-bottom: 5px;color: #000;}
    .login__form-wrapper p {font-size: 16px;font-weight: 300;line-height: 1.2;margin-bottom: 30px;}
    .login-lower-heading p {font-size: 14px;margin-bottom: 0;font-weight: 400;}
    .login-content.right {width: 70%;}
    .login-text {position: absolute;bottom: 38px;}
    .password-field {position: relative;}
    .password-field #toggler {position: absolute;cursor: pointer;width: 25px;height: 25px;bottom: 15px;right: 15px;}
    .fa-eye{position: relative;}
    .fa-eye:after {content:''; width:100%; height:100%; background-image: url(assets/images/close-eye.png); background-repeat:no-repeat; background-position:center; background-size:contain; position: absolute;}
    .fa-eye-slash{position: relative;}
    .fa-eye-slash:after {content:''; width:100%; height:100%; background-image: url(assets/images/open-eye.png); background-repeat:no-repeat; background-position:center; background-size:contain; position: absolute;}
    .form-check .form-check-label {font-size: 15px;line-height: 1.2;font-weight: 300;margin-top: 7px;}
    .form-check input {width: 25px;height: 25px;border-radius: 0 !important;border-color: #000;margin-right: 10px;}
    .form-check .form-check-input:checked{ background-color: #0d4ff1 !important;border-color: #0d4ff1 !important;}


</style>






<body>


    <div className="login-content-box">
        <div className="login-content">
            <div className="login-heading">
                <img src="{{asset('assets/images/logo.svg')}}"  style="filter: brightness(0) saturate(100%) invert(21%) sepia(87%) saturate(2908%) hue-rotate(221deg) brightness(92%) contrast(106%);" alt=""/>
            </div>


            <form action="{{route('login')}}" method="post">
                @csrf
                <div className="login__form-wrapper">
                    <h1>Welcome Back !</h1>
                    <p>Sign in to continue to SNVA Venture.</p>
                    <div className="login__field-group">
                        <label className="login__label" for="username">Username or Email</label>
                        <input className="input-field" id="username" type="text" name="email" placeholder="Please Enter Your Email"/>
                        @error('email')
                            <span className="text text-danger"> 
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div className="login__field-group password-field">
                        <label className="login__label" for="password">Password</label>
                        <input className="input-field password-input" type="password" id="fakePassword" name="password" placeholder="Please Enter Your Password"  />
                        @error('password')
                            <span className="text text-danger mt-2">    
                                {{ $message }}
                            </span>
                        @enderror
                        <span><i id="toggler"className="far fa-eye"></i></span>
                    </div>
                    <div className="login__field-group login__field-group--horz">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="auth-remember-check">
                            <label className="form-check-label" for="auth-remember-check">Remember me</label>
                        </div>
                        <a href="{{route('auth-pass-reset')}}" style="color:#0d4ff1; margin-top:7px; font-size: 15px; line-height: 1.2; font-weight: 300;">Forgot password</a>
                    </div>
                    <button className="login__btn" type="submit">  <span className="login__btn-label">Sign in</span>  </button>
                    <p className="login__sign-up">Don’t have an account? <a href="#" style="color:#0d4ff1;">Sign up</a></p>
                </div>
            </form>
            <div className="login-lower-heading">
                <p>© <span data-year>2023</span> SNVA Venture. All rights reserved.</p>
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
    </div>



    
    <!-- JAVASCRIPT -->
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/feather-icons/feather.min.js"></script>
    <script src="assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
    <script src="assets/js/plugins.js"></script>
    <!-- password-addon init -->
    <script src="assets/js/pages/password-addon.init.js"></script>

    <script>

            var password = document.getElementById('fakePassword');
                var toggler = document.getElementById('toggler');

                showHidePassword = () => {
                    if (password.type == 'password') {
                    password.setAttribute('type', 'text');
                    toggler.classNameList.add('fa-eye-slash');
                    } else {
                    toggler.classNameList.remove('fa-eye-slash');
                    password.setAttribute('type', 'password');
                    }
                };

            toggler.addEventListener('click', showHidePassword);

    </script>

</body>

</html>