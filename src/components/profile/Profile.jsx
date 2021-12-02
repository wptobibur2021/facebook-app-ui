import './Profile.css'
import React, {useEffect, useState} from "react"
import Feed from "../feed/Feed"
import TopBar from "../topbar/TopBar"
import LeftSideBar from "../leftsidebar/LeftSideBar"
import RightSideBar from "../rightsidebar/RightSideBar"
import axios from "axios";
import {useParams} from "react-router"
const Profile = () =>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const username = useParams().username
    const[user, setUser] = useState({})
    useEffect(() =>{
        const url = `/users?username=${username}`
        axios.get(url).then(res=>{
            setUser(res.data)
        })
    }, [username])
    return(
        <React.Fragment>
            <TopBar></TopBar>
            <div className="profileSections">
                <LeftSideBar></LeftSideBar>
                <div className="profileRight">
                    <div className="profileTop">
                        <div className="profileCoverImgSections">
                            <img src={user?.coverPicture ? PF + user.coverPicture : PF+"person/noCover.png" } className='coverImg' alt="" />
                            <img src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png" } className='coverProfileImg' alt="" />
                        </div>
                        <div className="profileInfo">
                            <p className="profileNameInfo">{user.fullName}</p>
                            <p className="profileDescInfo">{user.desc}</p>
                        </div>
                    </div>
                    <div className="profileButtom">
                        <Feed username={username}></Feed>
                        <RightSideBar user={user}></RightSideBar>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Profile