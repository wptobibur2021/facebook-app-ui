import React from 'react'

export default function FriendLists({friend}) {
    //console.log('Single Friend: ', friend)
    const {profilePicture, username} = friend
    return (
        <React.Fragment>
            <li className='friendList'>
                <img className='friendImg' src={profilePicture} alt=''/>
                <span className='friendName'>{username}</span>
            </li>
            <div className='divider'></div>
        </React.Fragment>
    )
}
