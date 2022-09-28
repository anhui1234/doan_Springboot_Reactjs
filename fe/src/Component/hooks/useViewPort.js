import { useEffect, useState } from "react"

export const useViewPort= ()=>{
    const[windowWidth,setwindowWidth]=useState(window.innerWidth||document.documentElement.clientWidth);
    useEffect(()=>{
        const handleWindowWidth=()=>{
            const width=window.innerWidth||document.documentElement.clientWidth;
            setwindowWidth(width);

        }
        handleWindowWidth();
        window.addEventListener("resize",handleWindowWidth);
        return ()=>{
            window.removeEventListener("resize",handleWindowWidth);
        }
    },[])
return [windowWidth];
}