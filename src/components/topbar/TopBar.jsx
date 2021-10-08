import './TopBar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
export default function TopBar(props) {
    console.log('Topbar Props: ',props)
    return (
        <div className='topBarContainer'>
            <div className="topBarLeft">
                <span className='logo'>FaceBook</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input onChange={props.searchPost} className='searchField' placeholder='Search friend, video, news etc' type="text" />
                </div>
            </div>
            <div className="topBarRight">
                {/* TopBar Link */}
                <span className="topBarLink">Home</span>
                <span className="topBarLink">TimeLine</span>
                {/* TopBar Icons */}
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person/>
                        <span className='topBarIconBadge'>1</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat/>
                        <span className='topBarIconBadge'>2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications/>
                        <span className='topBarIconBadge'>13</span>
                    </div>
                </div>
                {/* TopBar Profile Image */}
                <div className="topBarImage">
                    <img src="/assets/person/1.jpeg" alt="" className="profileImg" />
                </div>
            </div>
        </div>
    )
}
