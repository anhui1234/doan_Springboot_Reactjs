import axios from "axios";
import { toast } from "react-toastify";

import { addFailed, addStart, addSuccess, editFailed, editStart, editSuccess, loginFailed, loginStart, loginSuccess, movieDetailSuccess} from "./authSlice";

export const loginUser =async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try {
        const res= await axios.post("http://localhost:8080/api/auth/signin",user);
        dispatch(loginSuccess(res.data));
        navigate("/home");
        
    } catch (err) {
        dispatch(loginFailed());
        
    }
};
export const addMovie=async(movie,dispatch,navigate)=>{
    dispatch(addStart());
    try {
        await axios.post("http://localhost:8080/api/auth/movies",movie);
        dispatch(addSuccess());
       
        toast.success("Thêm thành công");
        navigate('/home');
    } catch (error) {
        dispatch(addFailed());
        toast.error("Thêm thất bại")
    }
}
export const editMovie=async(movie,dispatch,navigate)=>{
    
    dispatch(editStart());
    
    try {
        await axios.put(`http://localhost:8080/api/auth/edit/${movie.id_Movie}`,movie);
        dispatch(editSuccess());
        toast.success("Sửa thành công")
        navigate('/');
    } catch (error) {
        dispatch(editFailed());
        toast.error("Sửa thất bại")
    }
}
