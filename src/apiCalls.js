import axios from "axios";
// LOGIN API
export const loginCall = async (userCredential, dispatch)=>{

    dispatch({type: "LOGIN_START"})
    try{
        const res = await axios.post('auth/login', userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        // await axios.post('auth/login', userCredential).then(res=>{
        //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        // })
    }catch (e) {
        dispatch({type: "LOGIN_FAILURE", payload: e})
    }
}