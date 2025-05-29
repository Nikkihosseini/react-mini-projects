import { useState } from "react"

export default function UserCard(props){
    
    const [showMore , setShowmore] = useState(false)
    const [like , setLike] = useState(false)

    const moreDetails = ()=>{
        setShowmore(!showMore)
    }

    return(
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-slate-800 overflow-x-hidden">
               <div className="bg-stone-200 w-[292px] h-auto p-5 rounded-md text-stone-900 text-center shadow-md shadow-stone-100">
                    <div className="overflow-hidden rounded-full w-[200px] h-[200px] mx-auto">
                        <img className="inline-block w-full h-full object-cover" src={props.img} alt="user-img"/>
                    </div>
                    <h1 className="text-xl font-bold mb-1">{props.name}</h1>
                    <span className="block mb-1 font-semibold">{props.age}</span>
                    <span className="block mb-1">{props.job}</span>
                    {showMore && <span className="block mb-1">{props.email}</span>}
                    {showMore && <span className="block">{props.description}</span>}
                    <div>
                        <button onClick={moreDetails} className="mt-3 px-4 py-1 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-200 focus:outline-none">{!showMore ? 'Show More' : 'Show Less'}</button>
                        <button className="bg-stone-200 border-none outline-none focus:outline-none" onClick={()=>setLike(!like)}>{like ? "💖 Liked" : "🤍 Like"}</button>
                    </div>
               </div>
            </div>
        </>
    )
}