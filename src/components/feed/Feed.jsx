import {useState, useEffect, useContext} from 'react'
import Post from '../posts/Posts'
import Share from '../Share/Share'
import './Feed.css'
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";
export default function Feed({username}) {
    const[posts, setPosts] = useState([])
    const {user} = useContext(AuthContext)
    // const searchText = props.text
    // console.log('Search Text: ', searchText)
    useEffect(() => {
        if(username){
            const url = `/post/profile/${username}`
            axios.get(url).then(res=>{
                setPosts(res.data.sort((p1,p2)=>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                }))
            })
        }else{
            const url = `/post/timeline/${user._id}`
            axios.get(url).then(res=>{
                setPosts(res.data.sort((p1,p2)=>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                }))
            })
        }

    }, [username, user?._id])

    // let matchedPosts ;
    // if(searchText){
    //     matchedPosts = post.filter(post => (post.title).toLowerCase().includes(searchText))
    // }else{
    //     matchedPosts = post.filter(post => post.title.includes(searchText))
    // }
    
    //const matchedProducts = post.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
   // setSearchPost(matchedPosts)
    //console.log('Match Post: ', matchedPosts)
    return (
        <div className='newsFeed'>
            {username === user?.username && <Share></Share>}
            {
                posts?.map((p, i) => (
                    <Post key={p._id} post={p}  ></Post>
                ))
            }
        </div>
    )
}
