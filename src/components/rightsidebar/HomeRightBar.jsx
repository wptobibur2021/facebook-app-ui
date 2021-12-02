import React from 'react'
import { useState, useEffect } from 'react'
import OnlineFriendList from '../onlinefriends/OnlineFriendList'
export default function HomeRightBar() {
        // Random User Api Call Here
        const[onlineFriends, setOnlineFriends] = useState([])

        useEffect(() => {
            fetch('https://randomuser.me/api/?results=20')
            .then(res => res.json())
            .then(data => setOnlineFriends(data.results))
        }, [])
    return (
        <>
           <div className="birthdayContainer">
                <img src='/assets/gift.png' className='birthdayImg'/>
                <span className='birthdayText'>
                    <b>Pola Faster</b> and <b>More 3 Friends</b> have a birthday today.
                </span>
            </div>
            <img src='/assets/ad.png' className='addsImg' />
            <h3 className="rightBarTitle">Online User</h3>
            <ul className="rightBarFriendList">
                {onlineFriends.map((f, i) => <OnlineFriendList key={i} friend={f}></OnlineFriendList>)}
            </ul> 
        </>
    )
}
