import'./Share.css'
import {PermMedia, LocalOffer, TagFaces} from '@mui/icons-material'
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";
import useNotification from "../../Hooks/useNotification";

export default function Share() {
    const {user} = useContext(AuthContext)
    const {successNotify} = useNotification()
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        console.log('newPost: ', newPost)
        if(file){
            const data =  new FormData();
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file);
            newPost.img = fileName
            try{
                await axios.post('/upload', data)
            }catch (e) {
                console.log(e)
            }
        }
        try{
            await axios.post('/post/create', newPost).then(res=>{
                if(res.data){
                    successNotify("Your post share successfully")
                }
            })

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt={user?.fullName}/>
                    <input ref={desc} placeholder={`What is your mind ${user?.fullName} ?`} className='shareInput' />
                </div>
                <div className='shareDivider'></div>
                <form className="shareBottom" onSubmit={handleSubmit} >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".jpg, .png, .jpeg" onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <LocalOffer htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <TagFaces htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Feeling/Activity</span>
                        </div>
                    </div>
                    <button className='shareBtn' type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
