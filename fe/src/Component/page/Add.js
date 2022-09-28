import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import {addMovie} from "../../redux/apiRequest"

function Add(props) {
    
    const [category,setTheLoai]=useState("");
    const [name_Movie,setName]=useState("");
    const [tl,setTl]=useState("");
    const [content,setContent]=useState("");
    const [image,setImage]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const saveMovie=(e)=>{
        e.preventDefault();
       const newMovie={
        
        image: image,
        category:category,
        name_Movie:name_Movie,
        tl:tl,
        content:content
       }
       addMovie(newMovie,dispatch,navigate);
      
        
    }
  return (
    <div style={{marginTop:"200px",backgroundColor: "rgba(0,0,0,.75)",textAlign:"center",color:"white",height:"400px",width:"300px",marginLeft:"500px",borderRadius:"5px"}}>
            <div style={{textAlign: "center",marginBottom:"20px"}}>Thêm phim</div>
            <form onSubmit={saveMovie} enctype="multipart/form-data">
                
                <div >
                    <label>Thể loại:</label>
                </div>
                <div >
                    <input type='text' placeholder='Thể loại' 
                    onChange={(e)=>setTheLoai(e.target.value)}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Tên phim:</label>
                </div>
                <div >
                    <input type='text' placeholder='Tên phim' 
                    onChange={(e)=>setName(e.target.value)}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Thời lượng:</label>
                </div>
                <div >
                    <input type='text' placeholder='Thời lượng' 
                    onChange={(e)=>setTl(e.target.value)}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Nội dung:</label>
                </div>
                <div className='spin-content'>
                    <textarea placeholder='Nhập nội dung phim'
                    onChange={(e)=>setContent(e.target.value)}
                    style={{width:"200px",height:"60px",borderRadius:"2px"}}></textarea>
                </div>
                <div >
                    <label>Hình ảnh:</label>
                </div>
                <div >
                    <input type='file'
                    onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <input type='submit' value="Thêm" 
                style={{backgroundColor:"green",marginTop:"20px",width:"60px",height:"30px",borderRadius:"2px",cursor:"pointer"}}/>
                
            </form>
    </div>
  )
}

export default Add