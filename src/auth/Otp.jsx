// import React from 'react'
// import { Box, TextField } from "@mui/material";
// import { useRef, useState } from "react";

// const Otp = () => {
//   const OtpInput: React.FC = () => {
//   const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     index: number
//   ) => {
//     const value = e.target.value;

//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < OTP_LENGTH - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };  
//   return (
//      <main class="login-content-box">
//         <div class="login-content">
//             <div class="login-heading">
//                 <img src="images/logo.svg" alt=""/>
//             </div>
//             <form class="login__form" method="post" action="">
//                 <div class="login__form-wrapper">
//                     <h1>Verify Your Email !</h1>
//                     <p>Enter Your Email and Instructions will be sent to you !</p>
//                     <div class="otp-content-box">
//                         <div class="otp-box"> 
//                             {/* <input id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')" placeholder="0"> */}
//                             <Box display="flex" gap={2}>
//                               {otp.map((digit, index) => (
//                                 <TextField
//                                   key={index}
//                                   inputRef={(el) => (inputsRef.current[index] = el)}
//                                   value={digit}
//                                   onChange={(e) => handleChange(e.target.value, index)}
//                                   onKeyDown={(e) => handleKeyDown(e, index)}
//                                   inputProps={{
//                                     maxLength: 1,
//                                     style: { textAlign: "center", fontSize: "20px" },
//                                   }}
//                                   sx={{ width: 50 }}
//                                 />
//                               ))}
//                             </Box>
//                         </div>
//                         <div class="otp-box"> 
//                             {/* <input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')" placeholder="0"> */}
//                         </div>
//                         <div class="otp-box"> 
//                             {/* <input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')" placeholder="0"> */}
//                         </div>
//                         <div class="otp-box"> 
//                             {/* <input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')" maxlength=1 placeholder="0"> */}
//                         </div>
//                     </div>
//                     <button class="login__btn mt-4" type="button" data-login="false">
//                         <span class="login__btn-label">Confirm</span>
//                         <span class="login__btn-spinner"></span>
//                     </button> 
//                     <p class="login__sign-up"> Didn't receive a code ? &nbsp; <a href="#!">Re-Send</a></p>
//                 </div>
//             </form>
//             <div class="login-lower-heading">
//                 <p>© <span data-year>2023</span> SNVA Venture. All rights reserved.</p>
//             </div>
//         </div>
//         <div class="login-content right">
//             <div class="login-bg-img-type-4">
//                 <div class="login__testimonial">
//                     <div class="login-text">
//                         <h4> <q> Assduff Jekyll has helped us kick-start projects in a bang and save thousands of hours of work. </q> </h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </main>
//   )


// export default Otp
import React from 'react'

const Otp = () => {
  return (
    <div>
      hii
    </div>
  )
}

export default Otp
