import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
        <nav className='fixed z-10 w-full shadow-sm'>
            <div className='w-full'>
                <div className='flex items-center w-full h-20'>
                    <div className='flex items-center justify-between w-full mx-20 items'>
                        <div className='flex items-center justify-center flex-shrink-0'>
                            <Link href='/'>
                                <h1 className='text-xl font-bold cursor-pointer'>
                                    Sustainable <span className='text-blue-500'>Erasmus</span>
                                </h1>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-baseline ml-10 space-x-4'>
                                <Link href='/about'>
                                    <a className='px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white'>
                                        About
                                    </a>
                                </Link>
                                <Link href='/contact'>
                                    <a className='px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-black'>
                                        Contact
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar