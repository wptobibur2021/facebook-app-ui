import React from 'react'

export default function FriendLists({friend}) {
    //console.log('Single Friend: ', friend)
    const {profilePicture, username} = friend
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    console.log('Public Folder: ', PF)
    return (
        <React.Fragment>
            <li className='friendList'>
                <img className='friendImg' src={PF+profilePicture} alt=''/>
                <span className='friendName'>{username}</span>
            </li>
            <div className='divider'></div>
        </React.Fragment>
    )
}
