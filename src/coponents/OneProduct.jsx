import React from 'react'

export default function OneProuct({product}) {
  return (

  
    
    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-3  ">
              <img src ={product.image}  alt="product" className=" object-cover aspect-square w-64 h-48" />

    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.location}</p>
    <p class="mb-3 font-normal text-red-700 dark:text-gray-400">{product.price}€/nuit </p>

</div>

     )
}
