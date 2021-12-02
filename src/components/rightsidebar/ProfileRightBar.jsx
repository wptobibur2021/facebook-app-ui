import {useState, useEffect, useContext} from 'react'
import {
    ImageListItemBar,Button,List,ListItem,ListItemAvatar,ListItemText,Avatar,Divider,ImageListItem,ListSubheader,ImageList,    }
from '@mui/material';
import {School,EditLocation,Work,EventAvailable, Add,Remove } from '@mui/icons-material'
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom"

export default function ProfileRightBar({user}) {
        // Random User Api Call Here
        const PF = process.env.REACT_APP_PUBLIC_FOLDER
        const {user: currentUser} = useContext(AuthContext)
        const[onlineFriends, setOnlineFriends] = useState([])
        const [followed, setFollowed] = useState(currentUser?.followings.includes(user?._id))
        //const {user} = useContext(AudioContext)
        console.log('currentUser Info: ', currentUser)
        useEffect(async () => {
            const url = `/users/friends/${user._id}`
           await axios.get(url).then(res=>{
                setOnlineFriends(res.data)
           })
        }, [user._id])


        const handleSubmit = async (e) =>{
            console.log('ok')
            console.log('Followed Id: ', followed)
            try{
                if(followed){
                    await axios.put(`/users/unfollow/${user._id}`, {currentUser: user._id})
                }else{
                    await axios.put('/users/follow/'+user._id, {currentUser: user._id})
                }
            }catch (e) {
                console.log(e)
            }
            setFollowed(!followed)
        }
    return (
        <>
            {
                user?.username !== currentUser?.username &&
                <Button variant="contained" onClick={handleSubmit} sx={{my:3.5}}>{ followed ?  `Delete Friend` : `Add Friend` }</Button>
            }
            <div className="aboutUserInfo">
                <h3 className="rightBarTitle">User Info</h3>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <EditLocation />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Live in Now" secondary= {user.city}/>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <School />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="University" secondary="BU - Bangladesh University" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <Work />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Profetions" secondary="Web Application Developer" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <EventAvailable/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Date of Birth" secondary="Semtember 11, 1996" />
                    </ListItem>
                </List>
            </div>
            {
                onlineFriends &&
                <div className="userFriendLists">
                <h3 className="rightBarTitle">Online Friends</h3>
                <ImageList sx={{my: 2}}>
                {onlineFriends.map((friend, i) => (
                    <Link to={"/profile/"+friend.username}>
                        <ImageListItem key={i}>
                            <img
                                src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}
                                alt={friend.fullName}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={friend.fullName}
                                position="below"
                            />
                        </ImageListItem>
                    </Link>
                ))}
                </ImageList>
                </div>
            }

        </> 
    )
}
