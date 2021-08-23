import React from 'react'
import    "./Header.css"
import MenuIcon from  "@material-ui/icons/Menu";
import SearchIcon from  "@material-ui/icons/Search";
import VideoCallIcon from  "@material-ui/icons/VideoCall";
import AppsIcon from  "@material-ui/icons/Apps";
import NotificationsIcon from  "@material-ui/icons/Notifications";
import Avatar from  "@material-ui/core/Avatar";

function Header(){
return(  
    <div  className="header">

  <div className="header_left">
    <MenuIcon/>
    <img  className="header_logo"src = "/images/logo.png"  alt=""/>
    </div>
     
    <div className="header_input">
    <input  placeholder="search"type="text"/>
    <SearchIcon  className="header_inputbutton"/>
    </div>

    <div className="header_icons">
    <VideoCallIcon  className="header__icon"/>
    <AppsIcon   className="header__icon"/>
    <NotificationsIcon   className="header__icon"/>
    <Avatar/>
    </div>
    <button></button>
    </div>
)


}

export default Header
