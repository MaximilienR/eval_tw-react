import React from 'react'

export default function Nav() {
  return (
    
    <div class="relative flex h-16 items-center justify-between">
    <div class="flex-1">
      <h1 class="mb-3 font-bold text-red-500  dark:text-sky-400">Airbed & Breakfast</h1>
    </div>
    <div class="flex flex-1 items-center justify-end">
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Maison</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Appartements</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Villas</a>
        </div>
      </div>
    </div>
    <div class="md:hidden sm:ml-6 sm:block">
    <i class="fa-solid fa-bars text-3xl"></i>
</div>
  </div>
  )
}
