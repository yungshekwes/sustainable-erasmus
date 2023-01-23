import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed z-10 w-full bg-white shadow-sm'>
            <div className='w-full'>
                <div className='flex items-center w-full h-20'>
                    <div className='flex items-center justify-between w-full mx-20 items'>
                        <div className='flex items-center justify-center flex-shrink-0'>
                            <Link href='/'>
                                <h1 className='text-xl font-bold cursor-pointer'>
                                    Sustainable <span className='text-blue-600'>Erasmus</span>
                                </h1>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-baseline ml-10 space-x-4'>
                                <Link href='/map'>
                                    <a className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'>
                                        Map
                                    </a>
                                </Link>
                                <Link href='/instructions'>
                                    <a className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'>
                                        Instructions
                                    </a>
                                </Link>
                                <Link href='/survey'>
                                    <a className='px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-black'>
                                        Survey
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar