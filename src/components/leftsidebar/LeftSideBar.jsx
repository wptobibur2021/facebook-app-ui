import './LeftSideBar.css'
import {RssFeed, WorkOutline, School, Event, HelpOutline} from '@mui/icons-material'
import {Users} from '../../dummyData.js'
import FriendLists from '../friendlists/FriendLists'
export default function LeftSideBar() {
    return (
        <div className='leftSidebar'>
            <h1>LeftSidebar</h1>
            <div className="left-sidebar-menu">
                <ul className='leftSidebarList'>
                    <li className='left-sidebarListItem'>
                        <RssFeed className='leftSidebarIcon' />
                        <span>Feed</span>
                    </li>
                    <li className='left-sidebarListItem'>
                        <WorkOutline className='leftSidebarIcon' />
                        <span>Work</span>
                    </li>
                    <li className='left-sidebarListItem'>
                        <School className='leftSidebarIcon' />
                        <span>Course</span>
                    </li>
                    <li className='left-sidebarListItem'>
                        <Event className='leftSidebarIcon' />
                        <span>Event</span>
                    </li>
                    <li className='left-sidebarListItem'>
                        <HelpOutline className='leftSidebarIcon' />
                        <span>Help</span>
                    </li>
                </ul>
                <button className='showMore'>Shpw More</button>
                <div className='divider'></div>
                <ul className='friendLists'>
                    {/* Friend Lists Map Function Apply */}
                    {Users.map((u) => <FriendLists key={u.id} friend={u}></FriendLists>)}   
                </ul>
            </div>
        </div>
    )
}



