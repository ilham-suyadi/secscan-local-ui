"use client"

import { useState } from "react"
import SectionResult from "./sectionResult"
import { SlMagnifier } from "react-icons/sl";

const Project = () => {

    const [query, setQuery] = useState();
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputQuery:any = e.target.value;
        setQuery(inputQuery);
    };

    const clickSearch=(e:any)=>{
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }
    return(
        <>
            <div className="container lg:px-60">
            <h1 className="mb-10 text-center text-3xl font-bold mt-5">Search Repository</h1>
                      <form onSubmit={clickSearch}>
                        <div className="relative z-0 w-full mb-6 group">
                            <div className="flex items-center">
                            <input
                                type="text"
                                name="project"
                                id="project"
                                value={query}
                                onChange={onSearch}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 norder-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="project"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name Project
                            </label>
                            <button className="ml-3 flex-shrink-0 bg-gray-600 p-2.5 rounded-lg text-white">
                                <SlMagnifier />
                            </button>
                            </div>
                        </div>
                        </form>
                {query && <SectionResult query={query}/>}
            </div>
        </>
    )
}

export default Project