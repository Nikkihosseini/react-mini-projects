import { useEffect, useState } from "react"


export default function ErrorModal({message}){

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false) , 3000)
        return () => clearTimeout(timer);
    }, [])

     if (!visible) return null;
     
    return (
        <div className="fixed left-0 right-0 bottom-20 mx-auto p-4 bg-glitch-red flex items-center justify-center max-w-[300px] z-50">
            <p className="text-crt-white text-xs text-center">{message}</p>
        </div>
    )
}