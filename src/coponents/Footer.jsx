import React from 'react'

export default function Footer() {
  return (
<footer class="relative w-full mb-20  bg-gray-900 ">
  <div class="w-full px-8 mx-auto max-w-7xl">
    <div class="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
      <h5 class="mb-6 text-xl font-semibold text-slate-800">
            A propos
      </h5>
      <div class="grid justify-between grid-cols-3 gap-4">
        <ul>
          <p class="block mb-1 text-base font-semibold  text-slate-800">
Support          
</p>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
 Contact            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              FAQ
            </a>
          </li>
         
        </ul>
        <ul>
          <p class="block mb-1 text-base font-semibold text-slate-800">
            Company
          </p>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              About us
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Careers
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Press
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              News
            </a>
          </li>
        </ul>
        <ul>
          <p class="block mb-1 text-base font-semibold text-slate-800">
            Resource
          </p>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Events
            </a>
          </li>
          <li>
            <a href="#" class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Help center
            </a>
          </li>
        </ul>
      </div>
    </div>
        
      
   </div>
</footer>
  )
}
