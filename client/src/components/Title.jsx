import React from 'react'

const Title = ({title,subTitle,align}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${align==='left' &&  'md:items-start md:text-left'} `}>
    <h1 className='font-semibold text-4xl md:text-px]'>
      {title} </h1>
    <p className='text-sm md:text-base text-gray-/'>{subTitle}</p>
    </div>
  )
}

export default Title