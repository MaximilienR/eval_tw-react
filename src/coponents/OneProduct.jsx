import React from 'react'

export default function OneProuct({product}) {
  return (

  
    /*{ rouded pour arrondir les bords, attribuer une taille fixe aux images pour éviter leurs déformation }*/
    <div class="p-3 m-3 bg-white w-72 rounded-2xl hover:cursor-pointer drop-shadow-2xl min-w-[300px] overflow-x-auto">
    <img src ={product.image}  alt="product" className="object-cover w-64 h-48 rounded-xl" />

    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.location}</p>
    <p class="mb-3 font-bold text-red-500  dark:text-gray-400">{product.price}€/nuit </p>

</div>

     )
}
