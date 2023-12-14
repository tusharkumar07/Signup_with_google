import React from 'react'

export default function cards() {
  return (
    <div className='h-screen w-100vw bg-slate-500 grid md:grid-cols-2 lg:grid-cols-3 text-center justify-center sm:grid-cols-1'>
    <div className='bg-red-200 text-purple-400'>Item1</div>
    <div className='bg-red-400'>Item2</div>
    <div className='bg-red-600'>Item3</div>
    <div className='bg-red-600 text-purple-400'>Item4</div>
    <div className='bg-red-500'>Item5</div>
    <div className='bg-red-200'>Item6</div>
    </div>
  )
}
