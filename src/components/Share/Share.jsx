import'./Share.css'
import {PermMedia, Videocam, TagFaces} from '@mui/icons-material'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/2.jpeg" alt=""/>
                    <input placeholder='What is your mind Tobubur?' className='shareInput' />
                </div>
                <div className='shareDivider'></div>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Videocam htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Live Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Pgoto or Video</span>
                        </div>
                        <div className="shareOption">
                            <TagFaces htmlColor='red' className='shareOptionIcon'/>
                            <span className='shareOptionText'>Feeling/Activity</span>
                        </div>
                    </div>
                    <button className='shareBtn'>Share</button>
                </div>
            </div>
        </div>
    )
}
