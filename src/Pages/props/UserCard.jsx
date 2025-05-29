
export default function UserCard(props){
    return(
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-slate-800 overflow-x-hidden">
               <div className="bg-stone-200 w-auto h-[350px] p-5 rounded-md text-stone-900 text-center shadow-md shadow-stone-100">
                    <div className="overflow-hidden rounded-full w-[200px] h-[200px] mx-auto">
                        <img className="inline-block w-full h-full object-cover" src={props.img} alt="user-img"/>
                    </div>
                    <h1 className="text-xl font-bold mb-1">{props.name}</h1>
                    <span className="block mb-1 font-semibold">{props.age}</span>
                    <span className="block">{props.job}</span>
               </div>
            </div>
        </>
    )
}