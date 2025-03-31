import React from 'react'

export default function Footer() {
  return (
<footer class="md:fixed bottom-0 left-0 w-full bg-gray-800">
  <div class="w-full px-8 mx-auto max-w-7xl ">
    <div class="grid justify-between grid-cols-1 md:grid-cols-2">
      <h5 class="mb-6 text-xl font-semibold text-white">
        A propos
      
      </h5>
      
     
      <div class="grid justify-between grid-cols-1 md:grid-cols-3">
        <ul>
          <p class="block mb-1 text-base font-semibold  text-white">
            Support
          </p>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              FAQ
            </a>
          </li>
        </ul>
        <ul>
          <p class="block mb-1 text-base font-semibold text-white">
            Suivez nous
          </p>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Instagrame
            </a>
          </li>
          
          
        </ul>
        <ul>
          <p class="block mb-1 text-base font-semibold text-white">
          Mention légal
          </p>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
              Condition general
            </a>
          </li>
          <li>
            <a href="#" class="block text-white py-1 hover:text-slate-500 focus:text-slate-500 text-sm">
            Politique de confidentialité

            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}
