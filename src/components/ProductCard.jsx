import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product,product:{id,image,title,price,category}}) {
     const navigate = useNavigate();
     return (
          <li
          onClick={()=>{navigate(`/products/${id}`,{state:{product}})}}
          className=' cursor-pointer'
          >
               <img className='w-full ' src={image} alt={title}/>
               <div>
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <p className=' text-red-700 text-sm'>{`₩${price}`}</p>
               </div>
          </li>
     )
}
