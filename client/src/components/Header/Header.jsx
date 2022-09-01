
import React, { useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import "./Header.scss";
import {FbGamesOutLineIcon, FbGroupsOutLineIcon, FbMarketIcon, FbMarketOutLineIcon, FbMenuIcon, FbMesengerIcon, FbNotificationsIcon, FbVideoIcon, FbVideoOutLineIcon, HomeIcon, OutLineHomeIcon} from "../icons/MyIcons"



const Header = () => {




  return (
    <div className="header_container">
        <div className="header_full_sec">
            <div className="header_logo_sec">
                <a className='logo' href="/"><BsFacebook/></a>
                <div className="search_sec">
                    <label htmlFor="search_input"><IoSearchOutline /></label>
                    <input id='search_input' type="text" placeholder='Search Facebook' />
                </div>
            </div>
            <div className="header_menu_sec">
                <ul>
                    <li><a className='menuIconsActive' href="#"><HomeIcon/></a></li>
                    <li><a href="#"><FbVideoOutLineIcon/></a></li>
                    <li><a href="#"><FbMarketOutLineIcon/></a></li>
                    <li><a href="#"><FbGroupsOutLineIcon/></a></li>
                    <li><a href="#"><FbGamesOutLineIcon/></a></li>
                </ul>
            </div>
            <div className="header_profile_sec">
                <ul>
                    <li><a href="#"><FbMenuIcon/></a></li>
                    <li><a href="#"><FbMesengerIcon/></a></li>
                    <li><a href="#"><FbNotificationsIcon/></a></li>
                    <li>UserProfile</li>
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Header;