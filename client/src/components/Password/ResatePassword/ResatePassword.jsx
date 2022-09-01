import React from 'react';
import swal from 'sweetalert';
import AuthFooter from '../../AuthFooter/AuthFooter';
import { useState } from 'react';
import {  VscUnlock } from 'react-icons/vsc';
import './ResatePassword.scss';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResatePassword = () => {
  
  const {token} = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
  password : '',
  cpassword : ''
});
  // Hendel input
  const hendleInput = (e) => {
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }

// Create Alart
const [msg, setMsg] = useState({
  type  : '',
  msg   : "",
  status : false
});


const hendelPasswordReset = async (e) => {
  e.preventDefault();

  if(!input.password){
    setMsg({
      type  : 'warning',
      msg   : "Set A New Password",
      status : true
    });
  }else if(input.password !== input.cpassword){
    setMsg({
      type  : 'warning',
      msg   : "Password And Confirm Password Not Match",
      status : true
    });
  }else{
    let password = input.password;
    await axios.post('http://localhost:5050/api/user/reset_password', {token, password})
    .then( res =>{
      setMsg({
        type  : 'success',
        msg   : "Your Password Change SuccessFully",
        status : true
      });
      swal('Your Password Change SuccessFully', { icon: "success"});
      navigate('/login');
    })
    .catch( error =>{
      swal('Your Recovery Link Expired! Try Again', { icon: "warning"});
      ;
    });
  }

}


  return (
    <div className="container verify_page_container reset_container">
      <div className="rew full_section">
        <div className="col-md-4 sec_colum">
          <div className="card">
            <div className="card-body">
              <span className='icon_span'><VscUnlock/></span>
              <h1>Type Your Account New Password</h1>
                <div className="verify_form_sec pass_reset_form">
                { msg.status && <p className={` alert alert-${msg.type}`}>{msg.msg}</p> }                
                    <form onSubmit={hendelPasswordReset}>
                      <div className="my-3">
                        <input name='password' value={input.password} onChange={hendleInput} className='form-control' type="password" placeholder='New Password' />
                      </div>
                      <div className="my-3">
                        <input name='cpassword' value={input.cpassword} onChange={hendleInput} className='form-control' type="password" placeholder='Confirm New Password' />
                      </div>
                      <div className="my-3">
                        <button className='btn btn-primary w-100' id='submit_btn' type="submit">Change Password</button>
                      </div>
                    </form>
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

export default ResatePassword;