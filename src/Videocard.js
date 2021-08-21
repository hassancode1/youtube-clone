import React from "react";
import Avatar from  "@material-ui/core/Avatar";
import "./Videocard.css"



function Videocard({image, title, channel, views, timestamp, channelimage }){


    return(
        <div className="videocard">
        <img  className="videocard_thumb"src={image} alt=""/>
        <div className="video_info">
        <Avatar className="videocard_avatar" alt="" src={channelimage}/>
        <div className="video_text">
       <h4>{title}</h4>
       <p>{channel}</p>
         <p>
             {views}  . {timestamp}
         </p>
        </div>
 

        </div>
        </div>
        
    );
}

export default Videocard