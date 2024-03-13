import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <>
       <div className="bg-gray-800 py-4">
    <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">Logo</div>
        <div>
            <div className="flex space-x-20">
                
              <Link href="#" className="text-white hover:text-gray-300">Yaşam</Link>
              <Link href="#" className="text-white hover:text-gray-300">Yemek</Link>
               <Link href="#" className="text-white hover:text-gray-300">Finans</Link>
               <Link href="#" className="text-white hover:text-gray-300">Moda</Link>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Menu