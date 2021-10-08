import React from "react"
import Feed from "../feed/Feed"
import TopBar from "../topbar/TopBar"
import LeftSideBar from "../leftsidebar/LeftSideBar"
import RightSideBar from "../rightsidebar/RightSideBar"
const Profile = () =>{
    return(
        <React.Fragment>
            <TopBar></TopBar>
            <Feed></Feed>
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </React.Fragment>
    )
}
export default Profile