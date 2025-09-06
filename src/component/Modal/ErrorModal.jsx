

export default function ErrorModal(props){
    return (
        <div className="fixed left-0 right-0 bottom-20 mx-auto p-4 bg-glitch-red flex items-center justify-center max-w-[300px] z-50">
            <p className="text-crt-white text-xs text-center">{props.message}</p>
        </div>
    )
}