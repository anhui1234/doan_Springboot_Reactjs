import React, { useEffect, useRef, useState } from 'react'
import "../Contents/Module.content.scss"
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
import { SmothHorizontalScrolling } from '../../util';
import { useViewPort } from '../hooks/useViewPort';
import { Link} from "react-router-dom";
import axios from 'axios';

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
        fetch("http://localhost:8080/api/auth/movies")
        .then(res=>res.json())
        .then((result)=>{
            setMovie(result);
        }
        )
    },[]);
    useEffect(()=>{
        loadMovie();
     },[]);
  const loadMovie =async()=>{
     const result=await axios.get("http://localhost:8080/api/auth/movies");
     setMovie(result.data);
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
               <Link to={`/chitietphim/${movie.id_Movie}`}> <img src={`http://localhost:8080/api/auth/getimage/${movie.image}`}/></Link>
                <div className='movieName'>{movie.name_Movie}</div>
               <div className='dele'>
               
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