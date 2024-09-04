import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Your Own Digital</p>
                <h1 className='uppercase font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>GYM<span className='text-blue-400'>BRO</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Hey there! Just a heads up, using this website might lead to getting <span className='text-blue-400 font-medium'>seriously big and jacked.</span> Proceed with caution, and enjoy the <span className='text-blue-400 font-medium'> gains!</span></p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Begin"}></Button>
        </div>
    )
}