import React, { useEffect, useState } from 'react'
import Poster from "../../asset/images/login.jpg"
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import {  useParams } from 'react-router';
import axios from 'axios';



import { detailMovie } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
const showModal=false;
const fadeIn=keyframes`
0%:{background: rgba(0,0,0,0)}
100%: {background:rgba(0,0,0,0.6)}
`
function MovieDetail(props) {
   const [movie,setMovie]=useState({
        image:"",
        name_Movie:"",
        tl:""
   });
   const {id_Movie}=useParams();
   useEffect(()=>{
    load();
   })
   const load =async ()=>{
    const result=await axios.get(`http://localhost:8080/api/auth/movies/${id_Movie}`)
    setMovie(result.data);
   }

  return (
    <MovieDetailModel>
        
        <div className={'modal'}
        style={{backgroundImage:`url(http://localhost:8080/api/auth/getimage/${movie.image})`}}>
            <div className='container'>
                <div className='movieInfo'>
                    <h1 className='movieTitle'>{movie.name_Movie}</h1>
                    <p className='statiscal'>
                        {/* <span className='rating'>Rating:82%</span> */}
                        <span className='popularly'>Popularly:123.456.789</span>
                    </p>
                    
                    <p className='runtime'>runtime: {movie.tl}</p>
                    <p className='overview'>Nội dung: {movie.content}</p>
                </div>
            </div>
        </div>
        
        
    </MovieDetailModel>
  )
}

export default MovieDetail;
const MovieDetailModel=styled.div`
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0,0,0,0.6);
}
.modal{
    position: fixed;
    top:25%;
    left:0;
    z-index: 300;
    height: 70%;
    width: 100%;
    margin: 0 auto;
    color: white;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    .container{
        position: relative;
        width: 70%;
        height: 100%;
        background: linear-gradient(90deg,rgba(0,0,0,0.94) 60%,transparent);
        .movieInfo{
            width: 65%;
            height: 100%;
            padding-left: 24px;
            color: white;
            font-size: 20px;
            padding-top: 30px;
            .movieTitle{
                margin-top: 30px;
            }
            .statiscal{
                margin-top: 20px;
                display: flex;
                .rating{
                    color: green;
                }
                .popularly{
                    color: yellow;
                    margin-left: 12px;
                }
            }
            .runtime{
                margin-top: 12px;
            }
            .overview{
                margin-top: 20px;
                color: rgba(255,255,255,0.6);
                line-height: 1.4;
                font-size: 18px;
            }
        }
    }
}
`