import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addMovie } from '../../redux/apiRequest';


function Edit(props) {
    
    
    let navigate=useNavigate();
  
    let dispatch=useDispatch();
    const [category,setTheLoai]=useState("");
    const [name_Movie,setName]=useState("");
    const [tl,setTl]=useState("");
    const [content,setContent]=useState("");
    const [image,setImage]=useState("");
    
    const saveMovie=(e)=>{
        e.preventDefault();
       const movieold={
        image: image,
        category:category,
        name_Movie:name_Movie,
        tl:tl,
        content:content
       }
       addMovie(movieold,dispatch,navigate);
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
                    value={category}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Tên phim:</label>
                </div>
                <div >
                    <input type='text' placeholder='Tên phim' 
                    onChange={(e)=>setName(e.target.value)}
                    value={name_Movie}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Thời lượng:</label>
                </div>
                <div >
                    <input type='text' placeholder='Thời lượng' 
                    onChange={(e)=>setTl(e.target.value)}
                    value={tl}
                    style={{width:"200px",height:"25px",borderRadius:"2px"}}/>
                </div>
                <div >
                    <label>Nội dung:</label>
                </div>
                <div className='spin-content'>
                    <textarea placeholder='Nhập nội dung phim'
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                    style={{width:"200px",height:"60px",borderRadius:"2px"}}></textarea>
                </div>
                <div >
                    <label>Hình ảnh:</label>
                </div>
                <div >
                    <input type='file'
                    onChange={(e)=>setImage(e.target.value)}
                    value={image}/>
                </div>
                <input type='submit' value="Thêm" 
                style={{backgroundColor:"green",marginTop:"20px",width:"60px",height:"30px",borderRadius:"2px",cursor:"pointer"}}/>
                
            </form>
    </div>
  )
}

export default Edit
