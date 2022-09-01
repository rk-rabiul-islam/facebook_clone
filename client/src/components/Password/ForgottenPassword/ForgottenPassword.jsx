import React from 'react';
import swal from 'sweetalert';
import { VscLock } from "react-icons/vsc";
import AuthFooter from '../../AuthFooter/AuthFooter';
import { useState } from 'react';
import '../../VerifyUser/VerifyUser.scss'
import './ForgottenPassword.scss';
import axios from 'axios';


const ForgottenPassword = () => {

const [input, setInput] = useState('');
const [msg, setMsg] = useState({
  type  : '',
  msg   : "",
  status : false
});

// Chack User login methord 
const numberPattan = /^(01|8801|\+8801)[0-9]{9}$/;
const emailPattan = /^[a-z0-9._]{4,30}@[a-z0-9-]{3,20}\.[a-z]{2,9}$/;


const hendelForgotPasswordSubmite = async(e) =>{
  e.preventDefault();

  try {
    
    if(numberPattan.test(input)){

      await axios.post('http://localhost:5050/api/user/forgot_password', { 
        cell : input })
      .then( res =>{

        setMsg({
          type  : 'success',
          msg   : "Password Recovery Link Send",
          status : true
        });

      })
      .catch( error =>{
        setMsg({
          type  : 'danger',
          msg   : "Invalide Phone Number",
          status : true
        });

      });



    }else if(emailPattan.test(input)){

      await axios.post('http://localhost:5050/api/user/forgot_password', {
        email : input })
        .then( res =>{

          setMsg({
            type  : 'success',
            msg   : "Password Recovery Link Send",
            status : true
          });
  
        })
        .catch( error =>{
          setMsg({
            type  : 'danger',
            msg   : "Invalide Email Address",
            status : true
          });
  
        });

    }else{
      swal('This is Not a Login Mathord', { icon: "warning"});
    }

  } catch (error) {
    console.log(error);
  }

}



  return (
    <div className="container verify_page_container">
      <div className="rew full_section">
        <div className="col-md-4 sec_colum">
          <div className="card forgot_password">
            <div className="card-body">
              <span className='icon_span'><VscLock/></span>
              <h1>Trouble with logging in?</h1>
              <p className='verify_page_conten'>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</p>
                <div className="verify_form_sec forgot_form_sec"> 
                { msg.status && <p className={` alert alert-${msg.type}`}>{msg.msg}</p> }                
                    <form onSubmit={hendelForgotPasswordSubmite}>
                      <div className="my-3">
                        <input value={input} onChange={e => setInput(e.target.value)} className='form-control forgot_data_type' type="text" placeholder='Email address, Phone number or username' />
                      </div>
                      <div className="my-3">
                        <button className='btn btn-primary w-100' id='submit_btn' type="submit">Send Login link</button>
                      </div>
                    </form>
                    <div className="create_new_account">
                      <a href="/Register">Create New Account</a>
                    </div>
                </div>
            </div>
            <div className="card-footer">
              <a href="/login">Back to Login</a>
            </div>
          </div>
        </div>
      </div>

      <AuthFooter/>
    </div>
  )
}

export default ForgottenPassword;