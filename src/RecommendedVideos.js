import React from "react";
import "./RecommendedVideos.css"
import Videocard from "./Videocard"

function RecommendedVideos(){


    return(
        <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended_videos">
      <Videocard  
      title="eat in a ice cream in 10 minutes | 2019-2020"
      views="2.3M Views"
      timestamp="91days ago"
      channelimage="/images/bg.jpg"
      channel="sonny sanga"
      image="/images/bg2.jpg"
      />
         <Videocard  
      title="stamp woods for cooking | 2011-2021"
      views="18K Views"
      timestamp="3days ago"
      channelimage="/images/donut1.jfif"
      channel="Hassan jaeh"
      image="/images/donut3.jfif"
      />
         <Videocard  
      title=" Best computer for programming| 2019-2020"
      views="2.3M Views"
      timestamp="19days ago"
      channelimage="/images/pic 6.jfif"
      channel="clever qazi"
      image="/images/8.jpg"
      />
         <Videocard  
      title="  Band with left hand| 2019-2020"
      views="15M Views"
      timestamp="50days ago"
      channelimage="/images/pic 4.jfif"
      channel="muhammad code"
      image="/images/pic 5.jfif"
      />
         <Videocard  
      title="  best flowers  | 2013-2018"
      views="1.5M Views"
      timestamp="15days ago"
      channelimage="/images/pic1.jfif"
      channel="tj bensons flow"
      image="/images/pic 3.jfif"
      />
         <Videocard  
      title="perfect  lunch with bread | 2019-2020"
      views="3M Views"
      timestamp="3days ago"
      channelimage="/images/coffe1.jfif"
      channel="mairo bread"
      image="/images/donut.jfif"
      />
      </div>

        </div>
    )
}

export default RecommendedVideos