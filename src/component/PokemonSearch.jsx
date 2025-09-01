import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import  {pokemonSchema}  from "./validations/PokemonSchema"; 
import {useContext } from "react";
import {CartContext} from "./context/CartContext"

export default function PokemonSearch() {

  const {addToCart} = useContext(CartContext);
  const {register,handleSubmit,formState: { errors },reset} = useForm({resolver: yupResolver(pokemonSchema)});

  const onSubmit = async (data) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name.toLowerCase()}`);
      
      if (res.status === 200) {

        const pokemonData = res.data;
       
        addToCart({
          ...pokemonData,
          quantity: Number(data.quantity),
        });
        reset(); 
      }
    } catch (err) {
      alert("Pokemon not found!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-x-1">
      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className="h-9 p-2 text-xs w-32 focus:border-none focus:outline-none bg-retro-mint-green/90 text-crt-white placeholder-crt-white"
      />
      {/* {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} */}

      <input
        type="number"
        placeholder="Num"
        {...register("quantity")}
        className="h-9 p-2 text-xs w-16 focus:border-none focus:outline-none bg-retro-mint-green/90 text-crt-white placeholder-crt-white"
      />
      {/* {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>} */}

      <button type="submit" className="h-9 text-xs bg-retro-mint-green text-crt-white rounded-none focus:border-none focus:outline-none">
        Add
      </button>
    </form>
  );
}
