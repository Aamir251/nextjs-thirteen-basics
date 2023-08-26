'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react'

const SearchBar = () => {
    const [ searchTerm, setSearchTerm ] = useState<string>('')
    const router = useRouter()

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        // reset search term
        setSearchTerm('')
        router.push(`/${searchTerm}`)
    }
  return (
    <form 
        onSubmit={handleSubmit}
        className={`w-full max-w-sm border flex justify-between border-slate-700 rounded px-3 py-1 mx-auto bg-slate-800`}
    >

        <input
            className='bg-transparent outline-none border-none text-slate-400 text-sm'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder='Search...'
        />
        <button className='bg-slate-900 h-full font-medium text-sm py-1 px-3 rounded-md'>Search</button>
    </form>
  )
}

export default SearchBar