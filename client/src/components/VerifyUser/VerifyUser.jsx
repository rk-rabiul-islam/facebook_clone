import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import "./VerifyUser.scss";
import { MdVerifiedUser } from "react-icons/md";


const VerifyUser = () => {

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        axios.post( 'http://localhost:5050/api/user/verify', params)
        .then(res =>{
            swal('Your Account Verify successfull', { icon: "success",});
            navigate('/login');
        }

        ).catch(error =>{
          console.log(error);
            swal('Your Verify Url time is over. please try again', { icon: "warning"});
            navigate('/verify');
        });

    });

  return (
    <div className="container verify_page_container">
      <div className="rew full_section">
        <div className="col-md-5 sec_colum">
          <div className="card">
            <div className="card-body">
              <span className='icon_span'><MdVerifiedUser/></span>
              <h1>Your Account Verify Successful</h1>
              <p className='verify_page_conten'>Go Login Page And Login Your Account</p>
            </div>
            <div className="card-footer">
              <a href="/login">Back to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyUser;