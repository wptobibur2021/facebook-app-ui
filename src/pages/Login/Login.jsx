import './Login.css'
import { Typography, Grid, TextField, FormControl, Box, Button, Divider,CircularProgress } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import React, {useContext, useRef} from "react";
import {loginCall} from "../../apiCalls"
import {AuthContext} from "../../Context/AuthContext";
import {Link} from "react-router-dom"
import useNotification from "../../Hooks/useNotification";

export default function Login() {
    const password = useRef(null)
    const email = useRef(null)
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const {successNotify} = useNotification();
    const handleSubmit = (e) =>{
        e.preventDefault()
        loginCall({email:email.current.value, password:password.current.value}, dispatch)
        successNotify('Login has been Successful')
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
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    type="email"
                                    required
                                    multiline
                                    inputRef={email}
                                />
                            </FormControl>
                            <FormControl fullWidth variant="standard">
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="standard"
                                    type="password"
                                    minLength="6"
                                    required
                                    inputRef={password}
                                />
                            </FormControl>
                            <Button fullWidth className="loginBtn" type="submit" variant="contained">{isFetching ? <CircularProgress size="25px" sx={{color: "white"}}/> : "Login"}</Button>
                        </form>
                        <div className="loginButtom">
                            <Typography component="p">Forget Password?</Typography>
                            <Divider className="dividerlogin"/>
                            <Link to="/registration"><Button variant="contained" color="success">Create New Account</Button></Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}
