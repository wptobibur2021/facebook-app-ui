import './TopBar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";
export default function TopBar(props) {
    const{user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
                <Link to='/'><span className="topBarLink">Home</span></Link>
                <Link to='/profile'><span className="topBarLink">TimeLine</span></Link>
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
                    <Link to={`/profile/${user?.username}`}><img src={user?.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png' } alt={user?.fullName} className="profileImg" /></Link>
                </div>
            </div>
        </div>
    )
}
