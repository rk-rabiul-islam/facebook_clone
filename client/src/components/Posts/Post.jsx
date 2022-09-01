import React from 'react';
import "./Post.scss";
import { BoockMarkIcon, CommentIcon, HeartIcon, MsgIcon, SmaileIcon } from '../icons/MyIcons';
import {HiOutlineHeart} from "react-icons/hi"

const Post = () => {
  return (
    <div className="post_contanier">
      <div className="post_full_sec">
        <div className="card post_card">
          <div className="card-header">
            <div className="post_user_info">
              <a href="#"><img className='post_user_profile_photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb45aizN9bkkMP6nYNCwf-tEgnVK_mwEgYCR25idXsqlml4iW8IU2-Y1LmV-MWgB6Y2E&usqp=CAU" /></a>
              <div className="post_user_name">
                <a className='post_username' href="#">mehazabien</a>
                <a className='post_location' href="#">Radisson Blu Dhaka Water Garden</a>
              </div>
            </div>
            <div className="post_option"><a href="#">...</a></div>
          </div>
          <div className="post_img_video">
            <img src="https://cdn.mwallpapers.com/photos/celebrities/mehazabien-chowdhury/mehazabien-chowdhuryhd-wallpapers-desktop-background-android-iphone-1080p-4k-o19pk.jpg" alt="" />
          </div> 
          <div className="card-body">
            <div className="post_like_comment">
              <div className="post_menu">
                <ul>
                <li><a href="#"><HiOutlineHeart/></a></li>
                <li className='comment_icon'><a href="#"><CommentIcon/></a></li>
                <li><a href="#"><MsgIcon/></a></li>
                </ul>
                <a href="#" className='post_like_view'>617 likes</a>
              </div>
              <div className="post_boockmark">
                <a href="#"><BoockMarkIcon/></a>
              </div>
            </div>
            <div className="post_conten">
              <p className='comment_conten'><a href="#" className='post_user_username' >mehazabien</a>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nam voluptate impedit cupiditate neque praesentium eligendi deserunt laboriosam quo tempora.
              </p>
              <div className="post_comment_view">
                <a href="#">View all 100 comments</a>
              </div>
              <a href="#" className='post_time'>4 Days ago</a>
            </div>
          </div>
          <div className="card-footer">
            <div className="post_comment">
              <a href="#" className="comment_reacet"><SmaileIcon/></a>
              <input type="text" className='input_comment' placeholder='Add a comment...' />
              <button className='post_comment_btn'>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;