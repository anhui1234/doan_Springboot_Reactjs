import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import {VscMute,VscUnmute} from "react-icons/vsc"
import "../Introduce/Module.Intro.scss"
import { Link } from 'react-router-dom';

function Intro() {
    const [isMute,setIsMute]=useState(false);
    
  return (
    <div className='containerIntro'>
        <ReactPlayer
        playing={true}
        width="100%"
        loop={true}
        height="100%"
        volume={1}
        muted={false}
        url="https://vimeo.com/324647902"
        className="videoInfo"
        />
        <div className='info'>
            <h1 className='headingInfo'>Phim</h1>
            <p className='overInfo'>Phim ảnh lay động chúng ta theo một cách rất riêng, dù cho đó là phim 
                đáng sợ, hài hước, bi ai, lãng mạn hay dung hòa giữa các yếu tố đó. 
                Thật nhiều nội dung, thật nhiều cơ hội trải nghiệm.</p>
        </div>
        {
            isMute?(
                
                <VscMute className='videoMute'
                onClick={()=>setIsMute(prev=>!prev)}/>
                
                
            ):(
                
                <VscUnmute className='videoMute'
                onClick={()=>setIsMute(prev=>!prev)}/>
                
            )
        }
        <div className='fadeBottom'>
        {/* <div className='tt'><Link to={"/add"} className='cnadd'>Thêm</Link></div> */}
        </div>
    </div>
  )
}

export default Intro;