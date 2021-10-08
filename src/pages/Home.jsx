import { useState } from 'react';
import './Home'
import TopBar from "../components/topbar/TopBar";
import LeftSideBar from "../components/leftsidebar/LeftSideBar";
import RightSideBar from "../components/rightsidebar/RightSideBar";
import Feed from '../components/feed/Feed';
const Home = () =>{
    const [searchText, setSearchText] = useState([])
    const searchPost = e =>{
        const searchText = e.target.value
        console.log('Search Text: ', searchText)
        setSearchText(searchText)
    }
    return(
        <div className='main'>
            {/*  TopBar Component Call Here..... */}
            <TopBar searchPost={searchPost}></TopBar>
            <div className='mainConatiner'>
                {/* Left Sidebar Componet Call Here */}
                <LeftSideBar/>
                {/* News Feed Component Call here */}
                <Feed text={searchText}></Feed>
                {/* Right Sidebar Component Call here */}
                <RightSideBar/>
            </div>
        </div>
    )

}
export default Home
