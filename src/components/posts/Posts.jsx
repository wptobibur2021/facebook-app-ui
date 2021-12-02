import './Posts.css'
import { MoreVert } from '@mui/icons-material'
import {Typography} from '@mui/material'
import {useState, useEffect, useContext} from 'react'
import axios from "axios";
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import {AuthContext} from "../../Context/AuthContext";
export default function Posts({post}) {
    const {comment, date, title, img, userId, desc} = post
    const[like, setLike] = useState(post.likes.length)
    const[heart, setHeart] = useState(post.hearts.length)
    const[user, setUser] = useState({})
    const[isLiked, setIsLiked] = useState(false)
    const[isHearted, setIsHearted] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const{user:currentUser} = useContext(AuthContext)

    useEffect(() =>{
        const url = `/users?userId=${post.userId}`
        axios.get(url).then(res=>{
            setUser(res.data)
        }) 
    }, [post.userId])

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser?._id))
    }, [post.likes, currentUser?._id])


    // Like Handela Call Here
    const likeHandle = () =>{
        const url = `/post/like/${post._id}`
        try{
            axios.put(url, {userId: currentUser._id})
        }catch (e) {
            console.log(e)
        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    const heartHandle = () =>{
        const url = `/post/heart/${post._id}`
        try{
            axios.put(url, {userId: currentUser._id})
        }catch (e) {
            console.log(e)
        }
        setHeart(isHearted ? heart-1 : heart+1)
        setIsHearted(!isHearted)
    }

    return (
        <div className="posts">
            <div className="postsWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img className="postProfileImag" alt="" src={user?.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"}/>
                        </Link>
                        <span className="postUserName">{user.fullName}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="postIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <Typography sx={{ mb: 3 }} variant="span">
                        {title}
                    </Typography>
                    <span style={{ margin: "20px 0px" }}></span>
                    <br></br>
                    <span className='postText'>{desc}</span>
                    {
                        img && <img className="postImg" src={PF + `post/${img}`} />
                    }
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
