import React from 'react';
import swal from 'sweetalert';
import "./VerifyUser.scss";
import { GoUnverified } from "react-icons/go";
import AuthFooter from '../AuthFooter/AuthFooter';
import { useState } from 'react';
import axios from 'axios';



const UnVerifyUser = () => {

const [input, setInput] = useState('');
const [msg, setMsg] = useState({
  type  : '',
  msg   : "",
  status : false
});

// Chack User login methord 
const numberPattan = /^(01|8801|\+8801)[0-9]{9}$/;
const emailPattan = /^[a-z0-9\._]{4,30}@[a-z0-9-]{3,20}\.[a-z]{2,9}$/;

const heandalVerifySubmit = async(e) =>{
    e.preventDefault();
  
    try {
      
      if(numberPattan.test(input)){
  
        await axios.post('', { 
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
  
        await axios.post('', {
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
          <div className="card">
            <div className="card-body">
              <span className='icon_span'><GoUnverified/></span>
              <h1>Your Verify Url time is over</h1>
              <p className='verify_page_conten'>Enter your email address or phone number, and we'll send you a verification code for Your Account Verify.</p>
                <div className="verify_form_sec">
                { msg.status && <p className={` alert alert-${msg.type}`}>{msg.msg}</p> }                
                    <form onSubmit={heandalVerifySubmit}>
                      <div className="my-3">
                        <input id='verify_input' value={input} onChange={e => setInput(e.target.value)} className='form-control' type="text" placeholder='Email address or Phone' />
                      </div>
                      <div className="my-3">
                        <button className='btn btn-primary w-100' id='submit_btn' type="submit">Send new link</button>
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

export default UnVerifyUser;