import React from 'react'

export default function OneClient({client}) {
  return (
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-3">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.name}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{client.review}</p>
  </div>
  )
}

 