import { useState, useEffect } from 'react'
import Post from '../posts/Posts'
import Share from '../Share/Share'
import './Feed.css'
export default function Feed(props) {
    console.log('Feed Props: ', props)
    
   
    const[posts, setPosts] = useState([])
    const searchText = props.text
    console.log('Search Text: ', searchText)
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])

    let matchedPosts ;
    if(searchText){
        matchedPosts = posts.filter(post => (post.title).toLowerCase().includes(searchText))
    }else{
        matchedPosts = posts.filter(post => post.title.includes(searchText))
    }
    
    //const matchedProducts = posts.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
   // setSearchPost(matchedPosts)
    console.log('Match Post: ', matchedPosts)

    return (
        <div className='newsFeed'>
            <Share></Share>
            {matchedPosts.map((p, i) => (
                <Post key={i} post={p}  ></Post>
            ))}
        </div>
    )
}
