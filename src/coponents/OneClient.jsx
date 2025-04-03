import React from 'react'

export default function OneClient({client}) {
  return (
    /*{scale-110 pour agrandir }*/
    <div class="max-w-l p-4 w-bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-3 hover:scale-105  transition duration-300">
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.name}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.review}</p>
  </div>
  )
}

 