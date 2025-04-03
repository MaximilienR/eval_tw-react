import React from 'react'

export default function OneClient({client}) {
  return (
    /*{rouded pour arrondir les bords, donner une taille fix pour aux images pour plus qui s'écarte }*/
    <div class="max-w-xs p-4 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-3 hover:scale-110 transition duration-300">
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.name}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.review}</p>
  </div>
  )
}

 