import React,{useRef} from 'react';
import {Box, Button, Divider, FormControl, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom"
import axios from "axios";
import {useHistory} from 'react-router'
import useNotification from "../../Hooks/useNotification";
const Registration = () => {
    const fullName = useRef()
    const userName = useRef()
    const password = useRef()
    const email = useRef()
    const confirmPassword = useRef()
    const history = useHistory()
    const {successNotify} = useNotification()
    const handleSubmit = e =>{
        e.preventDefault()
        if(confirmPassword.current.value !== password.current.value){
            password.current.setCustomValidity("Password Don't Match!")
        }else{
            const user ={
                fullName:fullName.current.value,
                username: userName.current.value,
                password: password.current.value,
                email: email.current.value
            }
            axios.post('auth/registration', user).then(res=>{
              if(res.data){
                  successNotify('Registration has been Successful')
                  history.push('/login')
              }

            })
        }

        // const confirmPassword = confirmPassword.current.value
        console.log('User Name: ', fullName.current.value)
    }
    return (
        <div className='loginPageSections'>
            <Box>
                <Grid container spacing={2} columns={12} >
                    <Grid item md={6}>
                        <div className="loginInfo">
                            <h2 className="loginTitle">facebook</h2>
                            <p className="loginDesc">Facebook helps you connect and share with the people in your life.</p>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="loginFrom">
                            <form onSubmit={handleSubmit}>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="fullName"
                                        label="Full Name"
                                        multiline
                                        variant="standard"
                                        type="text"
                                        required
                                        inputRef={fullName}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="userName"
                                        label="User Name"
                                        multiline
                                        variant="standard"
                                        type="text"
                                        required
                                        inputRef={userName}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="email"
                                        label="Email"
                                        multiline
                                        variant="standard"
                                        type="email"
                                        required
                                        inputRef={email}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                        required
                                        minLength="6"
                                        inputRef={password}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="password"
                                        label="Confirm Password"
                                        variant="standard"
                                        type="password"
                                        minLength="6"
                                        required
                                        inputRef={confirmPassword}
                                    />
                                </FormControl>
                                <Button fullWidth className="loginBtn" type="submit" variant="contained">Sign Up</Button>
                            </form>
                            <div className="loginButtom">
                                <Divider className="dividerlogin"/>
                                <Link to='/'><Button variant="contained" color="success">Login</Button></Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Registration;