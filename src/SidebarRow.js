import React from "react";


function SidebarRow({ selected, Icon ,title}){ 


    return(
        <div  className={`sidebarrow     ${selected && "selected"}`  }  >
        <Icon  className="sidebarrow_icons"/>
       <h2 Sidebarrow__title>{title}</h2>
       
        </div>
    

    )
}


export  default SidebarRow
