import cookie from 'js-cookie';
import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../components/Auth/contexts/AuthContexts';
import Header from '../../components/Header/Header';
import Post from '../../components/Posts/Post';
import "./Home.scss";
import avator from '../../components/assets/images/avator.png'

const Home = () => {

  // use Contex
  const {userInfo, dispatch} = useContext(AuthContext);
  let userPhoto = "";
  if( userInfo.photo === 'avator.png' || userInfo.photo === ''){
      userPhoto = avator
  }else{
    userPhoto = userInfo.photo
  }

  // User Logout hendle
  const HendleLogout = (e) => {
    e.preventDefault();

    cookie.remove('token');
    dispatch({type : "LOG_OUT",})

  }


  return (
    
    <div>
      <Header/>
      <div className="home_container">
        <div className="home_full_sec">

            {/* home User daly Story section */}
            <div className="home_left_colum">
              <div className="home_user_story">
                <div className="user_story">
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <span className="story_username">rohim</span>
                  </a>
                </div>
                <div className="user_story">
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <span className="story_username">rohim</span>
                  </a>
                </div>
                <div className="user_story">
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <span className="story_username">rohim</span>
                  </a>
                </div>
              </div>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>

            {/* home Profile and follow section */}
            <div className="home_right_colum">
                <div className="home_user_info">

                  <div className="profile_info">
                    <a href="#" className='profile_img'><img src={userPhoto} alt="" /></a>
                    <div className="username_div">
                      <a href="#" className='user_name'>{userInfo.username}</a>
                      <span>{userInfo.name}</span>
                    </div>
                  </div>
                  <div className="switch_button">
                    <a href="#" onClick={ HendleLogout }>Switch</a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )

};

export default Home;
