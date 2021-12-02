import { toast } from 'react-toastify';
const useNotification = () =>{
    // Success Notify
    const successNotify = (message) =>{
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return {successNotify}

}
export default useNotification