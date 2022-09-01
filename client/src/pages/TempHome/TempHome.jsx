import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import MySlider from '../../components/slider/Slider';

import "./TempHome.scss";

const TempHome = () => {

  return (
    <div className="login_container TempHOme_container">
        <div className="temp_home_full_sec">
            <div className="tempHome_left_column">
            <MySlider/>

            </div>
            
            <div className="tempHome_right_column">
                <div className="login_full_sec">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login_logo" />
                    <div className="login_form">
                        <form action="#">
                            <input type="text" placeholder='Phone number, username or email address' />
                            <input type="password" name="" placeholder='Password' id="" />
                            <button className='login_btn'>Sign Up</button>
                        </form>
                        <span className='login_or'>OR</span>
                        <a className='logwith_facebook' href="#">{ <AiFillFacebook /> } <span>Log in with Facebook</span> </a>
                        <a className='forgot_pass' href="#" >Forgotten your password?</a>
                    </div>
                </div>
                <div className="login_full_sec sign_up_sec">
                    <span>Don't have an account? <a href="/Register">Sign up</a></span>
                </div>
                <div className="get_app">
                    <span>Get the app.</span>
                    <div className="get_app_logo">
                        <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /></a>
                        <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /></a>
                        
                    </div>
                </div>
            </div>
        </div>

            <AuthFooter/>
    </div>
  )
};

export default TempHome;