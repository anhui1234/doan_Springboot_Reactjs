import React, { useEffect, useRef, useState } from 'react'
import "../Contents/Module.content.scss"
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
import { SmothHorizontalScrolling } from '../../util';
import { useViewPort } from '../hooks/useViewPort';
import {MdDelete} from "react-icons/md";
import {BiEdit} from "react-icons/bi"
import axios from 'axios';
import {Link} from "react-router-dom";
function MovieRow(props) {
    // const [isNetflix]=props;
    const sliderRef=useRef();
    const movieRef=useRef();
    const [movies,setMovie]=useState([]);
    
    const [windowWidth]=useViewPort();
    const handleScrollRight=()=>{
        const maxScrollLeft=sliderRef.current.scrollWidth-sliderRef.current.clientWidth;
        if(sliderRef.current.scrollLeft<maxScrollLeft){
            SmothHorizontalScrolling(sliderRef.current,250,movieRef.current.clientWidth*3
                ,sliderRef.current.scrollLeft)
        }
    }
    const handleScrollLeft=()=>{
       
        if(sliderRef.current.scrollLeft>0){
            SmothHorizontalScrolling(sliderRef.current,250,-movieRef.current.clientWidth*4
                ,sliderRef.current.scrollLeft)
        }
    }
    useEffect(()=>{
       loadMovie();
    },[]);
 const loadMovie =async()=>{
    const result=await axios.get("http://localhost:8080/api/auth/movies");
    setMovie(result.data);
 }
 const deleteMovie=async id_Movie=>{
    await axios.delete(`http://localhost:8080/api/auth/delete/${id_Movie}`);
    loadMovie();
 }


  return (
    <div className='MovieRow'>
        <h1 className='heading'>
        Phim
        </h1>
        <div className='MovieSlider' ref={sliderRef} style={{gridTemplateColumns:"repeat(16,320px)"}}>
        {movies.map((movie,index)=>
            
        (
            
            <div key={index} className="movieItem" ref={movieRef}>
                
                <img src={`http://localhost:8080/api/auth/getimage/${movie.image}`}/>
                <div className='movieName'>{movie.name_Movie}</div>
               <div className='dele'>
               <a onClick={()=>deleteMovie(movie.id_Movie)}><MdDelete/></a>
                <Link to={`/edit/${movie.id_Movie}`}><BiEdit/></Link>
               </div>
            </div>
           ))}
        </div>
        <div className='btnLeft'>
            <BsChevronLeft onClick={handleScrollLeft}/>
        </div>
        <div className='btnRight' onClick={handleScrollRight}>
            <BsChevronRight/>
        </div>
    </div>
  )
}

export default MovieRow;