import React from 'react'

const Title = ({title}) => {
  return (
    <div className='w-full flex items-center mb-1'>
        <h1 className='font-bold ' >{title}</h1>
<span className='h-[1px] text-black bg-black w-full'   ></span>
    </div>
  )
}

export default Title