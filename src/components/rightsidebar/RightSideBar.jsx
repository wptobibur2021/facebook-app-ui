import { useState, useEffect } from 'react'
import './RightSideBar.css'
import OnlineFriendList from '../onlinefriends/OnlineFriendList'
export default function RightSideBar() {

    // Random User Api Call Here
    const[onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => setOnlineFriends(data.results))
    }, [])

    return (
        <div className='rightSidebar'>
            <div className="rightSidebarWarapper">
                <div className="birthdayContainer">
                    <img src='/assets/gift.png' className='birthdayImg'/>
                    <span className='birthdayText'>
                        <b>Pola Faster</b> and <b>More 3 Friends</b> have a birthday today.
                    </span>
                </div>
                <img src='/assets/ad.png' className='addsImg' />
                <h4 className="rightBarTitle">Online User</h4>
                <ul className="rightBarFriendList">
                    {onlineFriends.map((f, i) => <OnlineFriendList key={i} friend={f}></OnlineFriendList>)}
                </ul>
            </div>
        </div>
    )
}
