import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  
  const [tag,setTag]=useState('')
    
 
  const {gif,loading,fetchData}=useGif(tag);

    
    function changeHandler(event){
      setTag(event.target.value);
    }
  
  return (
    <div className="w-[800px] min-h-min bg-blue-400 rounded-3xl border border-black flex flex-col items-center gap-y-5 mt-14">
      <h1 className=" text-2xl underline uppercase font-semibold pt-4">Random {tag} GIFS</h1>

      {
        loading ? (<Spinner/>): (<img src={gif} width="450"/>)
      }

      <input
      className="w-10/12 text-lg py-2 rounded-lg text-center font-bold"
      onChange={changeHandler}
      value={tag}/>

      <button className=" w-10/12 bg-white text-lg py-2 rounded-lg opacity-80 pb-2 mb-6" onClick={()=>fetchData(tag)}>Generate</button>
    </div>
  )
  
} 
