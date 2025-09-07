import {useState, useEffect} from 'react'

export default function SuccessModal({message , top}){

    const [visible, setVisible] = useState(true)
    
        useEffect(() => {
            const timer = setTimeout(() => setVisible(false) , 3000)
            return () => clearTimeout(timer);
        }, [])
    
        if (!visible) return null;
    
    return (
        <div className={`fixed left-0 right-0 ${top} mx-auto p-4 bg-retro-green flex items-center justify-center max-w-[300px] z-50`}>
            <p className="text-crt-white text-xs text-center">{message}</p>
        </div>
    )
}