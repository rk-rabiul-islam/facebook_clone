import React, { useState, useContext } from 'react';
import { AiFillFacebook } from "react-icons/ai";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate} from "react-router-dom"
import cookie from 'js-cookie';
import AuthContext from '../../components/Auth/contexts/AuthContexts';
import LoaderContexts from '../../components/AllContexts/contexts/LoaderContexts';
import swal from 'sweetalert';
import "./Login.scss";


// img lode
import facebookLogo from '../../components/assets/images/facebook.jpg'
import SignUP from '../Register/SignUP';
import ReagisterPageContexts from '../../components/AllContexts/contexts/ReagisterPageContexts';



const Login = () => {


  // use State update
  const {dispatch} = useContext(AuthContext);
  const {LoaderDispatch} = useContext(LoaderContexts);

  // login Redicreat
  const navigate = useNavigate();
  
    // Create Alart toast
    const submitAlart = (msg, type) => {
  
      return type ? toast.success(msg) : toast.warning(msg); 
    }
  
  
    // use State
    const [ input, setInput] = useState({
      authInput : "",
      password : ""
    });
  
    // Hendel input
    const hendleInput = (e) => {
  
      setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  
    }

    // User Login Heandler
    const userLoginHendle = async(e) => {
      e.preventDefault();
  
      try {
        if( !input.authInput || !input.password ){
          submitAlart('All fields are required',)
        }else{

          await axios.post('http://localhost:5050/api/user/login', input)
          .then( res => {

            if(res.data.user.isVerified){
              cookie.set('token', res.data.token);
              dispatch({type : "LOGIN_USER_SUCCESS", payload: res.data.user});        
              navigate('/');
              LoaderDispatch({type : "LOADER_START"})
              submitAlart("User Login successfully", true)
            }
            else{
              swal(`Hello ${res.data.name}`, "Please Verify You Account!", "warning");
            }
  
          });
        }
        
      } catch (error) {
        submitAlart("Wrong Email or Passwrod", false);
      }
  
    }

  const {ReagisterState, ReagisterDispatch} = useContext(ReagisterPageContexts);
  const hendelRegisterShow = () =>{
    ReagisterDispatch({type : "SHOW_PAGE", payload: true});
  }


  return (
    <>
    <div className="login_container">
      <ToastContainer/>
      <div className="login_waper">
        <div className="left_colume">
          <img src={facebookLogo} alt="" className="login_logo" />
          <span className='logo_bottom_text'>Facebook helps you connect and share with the people in your life.</span>
        </div>
        <div className="right_colume">
            <div className="login_full_sec">
                <div className="login_form">
                    <form onSubmit={userLoginHendle}>
                        <input name='authInput' value={input.authInput} onChange={hendleInput} type="text" placeholder='Email address or Phone number' />
                        <input name='password' value={input.password} onChange={hendleInput} type="password" placeholder='Password' id="" />
                        <button type='submit' className='login_btn'>Log In</button>
                    </form>
                      <a className='forgot_pass' href="/accounts/password/forgot/" >Forgotten password?</a>
                    <hr />
                    <button onClick={hendelRegisterShow} className='create_new_account'>Create New Account</button>
                </div>
            </div>
            <div className="form-bottom_tex">
              <p><a href="#">Create a Page</a> for a celebrity, brand or business.</p>
            </div>
        </div>
      </div>
        <AuthFooter/>
    </div>
    {ReagisterState ? <SignUP/> : ""}
    </>
  )
};

export default Login;