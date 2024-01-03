import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
  <div className="w-full h-screen flex flex-col background overflow-x-hidden relative items-center">
      <hi className= " bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 font-bold text-4xl ">
        RANDOM GIFS</hi>
    <div className="flex flex-col w-full items-center gap-y-10 mt-10">
      <Random/>
      <Tag/>
      </div>

    </div>
    

  ) 
}
