
import ThemeToggleButton from '../component/ThemeToggleButton'
import Footer from './Footer'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {contactSchema} from '../component/validations/contactSchema'

export default function Contact() {

    const {register,handleSubmit,formState: { errors },reset,} = useForm({ resolver: yupResolver(contactSchema) });

    console.log(errors);

     const onSubmit = (data)=>{
        console.log(data); 
            reset();
        
     } 

  return (
   <>
    <div className="relative flex items-center justify-center w-full min-h-screen dark:bg-void-black bg-crt-white overflow-hidden">

        <div className='absolute top-5 right-5 flex items-end justify-end w-[90%]'>
            <ThemeToggleButton/>
        </div>
        
        <div className='flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto mb-3'>
            <Footer/>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-3 text-pastel-glitch-purple">
            <h1 className="text-xl md:text-4xl font-bold mb-6 font-pixel">Contact Me</h1>
            <span className='border-2 border-dashed w-full border-vintage-rose mb-4'></span>
            <p className="text-xs md:text-lg leading-relaxed mb-6 w-full max-w-sm md:max-w-xl">
                I'd love to hear your thoughts about this project.  
                Send me a message using the form below:
            </p>
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                <input name='name' autoComplete='name' {...register("name")} type="text" placeholder="Your Name" className="p-3 border border-gray-500 bg-gray-900 text-crt-white w-full"/>

                  {errors.name && <p className='text-glitch-red text-xs'>{errors.name?.message}</p>}

                <input name='email' autoComplete='email' {...register("email")} type="email" placeholder="Your Email" className="p-3 border border-gray-500 bg-gray-900 text-crt-white w-full"/>

                  {errors.email && <p className='text-glitch-red text-xs'>{errors.email?.message}</p>}

                <textarea name='textarea' {...register("textarea")} placeholder="Your Message" className="p-3 border border-gray-500 bg-gray-900 text-crt-white min-h-32 max-h-40 w-full"/>

                 {errors.textarea && <p className='text-glitch-red text-xs'>{errors.textarea?.message}</p>}

               <button type="submit" className="rounded-none bg-pixel text-crt-white border-gray-500 bg-gray-900 py-3 shadow-md hover:scale-105 transition-all w-full">
                Send Message
               </button>
            </form>
        </div>
    </div>
   </>
  )
}
