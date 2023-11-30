"use client"
import { postGitlab } from '@/app/lib/api';
import { useState } from 'react';

const Form = () => {
    const[name, setName] = useState('');
    const[url, setUrl] = useState('');
    const[token, setToken] = useState('');

    const handleSubmit = async (e: {preventDefault: () => void; }) =>{
        e.preventDefault();

        await postGitlab(name, url, token);
   }

    return(
        <div>
            <h1 className="mb-10 text-center text-3xl font-bold mt-5">Add Server Gitlab</h1>
            <form onSubmit={handleSubmit} className='lg:px-16'>
                <div className='relative z-0 w-full mb-8 group'>
                    <input type="text" name='name' id='name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 norder-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 peer'
                    placeholder='' required
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name" className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input type="url" name='url' id='url'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 norder-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 peer'
                    placeholder='' required
                    value={url} onChange={(e) => setUrl(e.target.value)}
                     />
                    <label htmlFor="url" className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        URL Gitlab <span className='text-slate-500 font-extralight italic'>Ex. https://gitlab.com</span>
                    </label>
                </div>

                <div className='relative z-0 w-full mb-8 group'>
                    <input type="text" name='token' id='token' 
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 norder-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 peer'
                    placeholder='' required
                    value={token} onChange={(e) => setToken(e.target.value)}
                    />
                    <label htmlFor="url" className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Token
                    </label>
                </div>
                <div className='flex justify-end'>

                <button type='submit' className='bg-gray-600 text-white rounded-lg py-2 px-6'>add</button>
                </div>
            </form>
        </div>
    )
}

export default Form