import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Rohi<span className='text-blue-400 bold'>iris</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="https://www.linkedin.com/in/bhojanapu-venkata-rohith-3a64672b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Donate</a>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
