import React from 'react'

export default function OnlineFriendList({friend}) {
    //console.log('Random User: ', friend)
    const {name, picture} = friend
    return (
        <React.Fragment>
            <li className="rightBarFriend">
                <div className="rightBarProfileImgContainer">
                    <img src={picture.thumbnail} alt={name.first} className="rightBarprofileImg" />
                    <span className="onlineFriendCheck"></span>
                </div>
                <span className="rightBarFriendName">{name.title} {name.first} {name.last}</span>
            </li>
        </React.Fragment>
    )
}
