import React, { PropsWithChildren } from 'react'

const AnimationComp = ({children , size , rotation}:PropsWithChildren <{size : number , rotation: number;}> ) => {
  return (
    <div>
      <div className='absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 lg:block hidden'>
      <div className=' flex justify-start items-start'
       style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`
      }}>
        <div className=' inline-flex'
        style={{
          transform: `rotate(${rotation * -1}deg)`
        }}
        >{children}</div>
        </div>
 </div>
    </div>
  )
}

export default AnimationComp
