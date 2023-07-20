import React from 'react'

const Loader = () => {
  return (
    <div>
        <div className='relative flex gap-[0.3em] before:content-none before:absolute before:top-0 before:left-0 before:w-full before:h-[2em] before: blur-[45px] before:bg-pink-200'
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
        </div>
    </div>
  )
}

export default Loader
