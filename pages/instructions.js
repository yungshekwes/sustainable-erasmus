import React from 'react'

function Instructions() {

  return (
    <main className="relative flex items-center h-screen px-6 text-white lg:px-32">
    <div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10">
      <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">Open Survey First</p>
          <p class="mt-2 text-sm text-slate-500">Click on the survey button at the top right of the website and complete the survey till the point it asks you to interact with the map.</p>
        </div>

        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">City Selector At Top Right</p>
          <p class="mt-2 text-sm text-slate-500">Click on the top right selector to choose the city that you wish to travel to, and view the emissions of the different modes of travel.</p>
        </div>

        <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">Finish Survey</p>
          <p class="mt-2 text-sm text-slate-500">When you find that you have interacted with the map enough, head back to the survey and finish the remaining section.</p>
        </div>
      </div>
      <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-blue-500 text-white shadow-lg shadow-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 448 512" stroke="currentColor" stroke-width="24.5">
              <path d="M86.76 48C74.61 48 63.12 53.52 55.53 63.01L42.74 78.99C34.46 89.34 19.36 91.02 9.007 82.74C-1.343 74.46-3.021 59.36 5.259 49.01L18.04 33.03C34.74 12.15 60.03 0 86.76 0H361.2C387.1 0 413.3 12.15 429.1 33.03L442.7 49.01C451 59.36 449.3 74.46 438.1 82.74C428.6 91.02 413.5 89.34 405.3 78.99L392.5 63.01C384.9 53.52 373.4 48 361.2 48H248V96H288C341 96 384 138.1 384 192V352C384 382.6 369.7 409.8 347.4 427.4L412.9 492.9C419.9 499.9 414.9 512 404.1 512H365.3C356.8 512 348.6 508.6 342.6 502.6L288 448H160L105.4 502.6C99.37 508.6 91.23 512 82.74 512H43.04C33.06 512 28.06 499.9 35.12 492.9L100.6 427.4C78.3 409.8 64 382.6 64 352V192C64 138.1 106.1 96 160 96H200V48H86.76zM160 160C142.3 160 128 174.3 128 192V224C128 241.7 142.3 256 160 256H288C305.7 256 320 241.7 320 224V192C320 174.3 305.7 160 288 160H160zM160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352C192 334.3 177.7 320 160 320zM288 384C305.7 384 320 369.7 320 352C320 334.3 305.7 320 288 320C270.3 320 256 334.3 256 352C256 369.7 270.3 384 288 384z"/>
            </svg>
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">Consider the entire duration of travel</p>
          <p class="mt-2 text-sm text-slate-500">
            When making use of the interactive map, do consider the entire duration of travel. For example, if you were to take a flight from Amsterdam, you would need to take 
            a train that takes about 2 hours, and you would also have to get to the airport a few hours before your flight.
          </p>
      </div>
    </div>
    </main>
  )
}

export default Instructions