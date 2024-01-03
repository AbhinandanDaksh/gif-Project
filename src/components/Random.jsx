import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  // const [gif,setGif]=useState("");
  // const [loading,setLoading]=useState('false');
    
  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url
  //   setGif(imageSource)
  //   setLoading(false);


      
  //   }
  //   useEffect(()=>{
  //     fetchData();
  //   },[])

  const {gif,loading,fetchData}=useGif();

    function clickHandler(){
      fetchData();
    }
  
  return (
    <div className="w-[800px] min-h-min bg-green-500 rounded-3xl border border-black flex flex-col items-center gap-y-5 mt-14">
      <h1 className=" text-2xl underline uppercase font-semibold pt-4">A Random GIFS</h1>

      {
        loading ? (<Spinner/>): (<img src={gif} width="450"/>)
      }


      <button className=" w-10/12 bg-white text-lg py-2 rounded-lg opacity-80 pb-2 mb-6" onClick={clickHandler}>Generate</button>
    </div>
  )
  
}
