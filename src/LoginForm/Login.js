import React, { useState} from "react";
import {
  emailValidators,
  passwordValidator,
} from "../components/regexvalidators";
import { useNavigate } from "react-router-dom";
function Login() {

  const History = useNavigate()
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [success, setsuccess] = useState("");
  const handlesubmit = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


//   React.useEffect(() => {
//   if(localStorage.getItem('auth')) History('/Home')
// },[])

  const formsubmitter = (e) => {
    e.preventDefault();
	  setsuccess('')
    if (!emailValidators(input.email))
      return seterrorMessage("please enter valid email id");
    if (!passwordValidator(input.password))
      return seterrorMessage(
        "please should have minimum 8 characters with the combination of uppercase, lowercase, number and specialcharacters"
      );
    //setsuccess("Succesfully Validate");
    if (input.email !== "hariharan@gmail.com" || input.password !== "Welcome@01") return seterrorMessage('Invalid email or password')  
    
    History('/Home')
    localStorage.setItem('auth',true)
  };
  return (
    <div>
      <div>
        <div className="limiter">
          <div
            className="container-login100"
            style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
          >
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <form
                className="login100-form validate-form"
                onSubmit={formsubmitter}
              >
                <span className="login100-form-title p-b-49">Login</span>
                {errorMessage.length > 0 && (
                  <div style={{ marginBottom: "10px", color: "red" }}>
                    {errorMessage}
                  </div>
                )}
                {success.length > 0 && (
                  <div style={{ marginBottom: "10px", color: "green" }}>
                    {success}
                  </div>
                )}
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="email is required"
                >
                  <span className="label-input100">Email</span>
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Type your username"
                    onChange={handlesubmit}
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    type="text"
                    name="password"
                    placeholder="Type your password"
                    onChange={handlesubmit}
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div className="text-right p-t-8 p-b-31">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">Login</button>
                  </div>
                </div>
                <div className="txt1 text-center p-t-54 p-b-20">
                  <span>Or Sign Up Using</span>
                </div>
                <div className="flex-c-m">
                  <a href="#" className="login100-social-item bg1">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="login100-social-item bg2">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="login100-social-item bg3">
                    <i className="fa fa-google" />
                  </a>
                </div>
                {/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div> */}
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    </div>
  );
}

export default Login;
