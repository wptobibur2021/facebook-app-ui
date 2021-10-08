import './Posts.css'
import { MoreVert } from '@mui/icons-material'
import {Users} from '../../dummyData.js'
import { useState, useEffect } from 'react'
export default function Posts({post}) {

    const user = Users.filter(user => user.id === post.userId)
    const {comment, date, title, photo, userId, body} = post

    const[like, setLike] = useState(post.like)
    const[heart, setHeart] = useState(post.heart)
    const[isLiked, setIsLiked] = useState(false)
    const[isHearted, setIsHearted] = useState(false)

    // Like Handela Call Here

    const likeHandle = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    const heartHandle = () =>{
        setHeart(isHearted ? heart-1 : heart+1)
        setIsHearted(!isHearted)
    }

    return (
        <div className="posts">
            <div className="postsWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <img className="postProfileImag" alt="" src={user[0].profilePicture}/>
                        <span className="postUserName">{user[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="postIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{title}</span>
                    <br></br>
                    <span className='postText'>{body}</span>
                    <img className="postImg" src={photo} />
                </div>
                <div className="postBotton">
                    <div className="postBottomLeft">
                        <img onClick={likeHandle} src='/assets/like.png' className='postReactionIcon' />
                        <span className="likeReaction">{like}</span>
                        <img onClick={heartHandle} src='/assets/heart.png' className='postReactionIcon' />
                        <span className="likeReaction">{heart}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='comments'>{comment} Comment</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
