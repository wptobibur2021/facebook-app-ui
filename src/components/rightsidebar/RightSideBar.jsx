import HomeRightBar from './HomeRightBar'
import ProfileRightBar from './ProfileRightBar'
import './RightSideBar.css'
export default function RightSideBar({user}) {
    return (
        <div className='rightSidebar'>
            <div className="rightSidebarWarapper">
                {
                    user ? <ProfileRightBar user={user}></ProfileRightBar> : <HomeRightBar></HomeRightBar>
                }
            </div>
        </div>
    )
}
