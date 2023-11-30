import useSWR from "swr"
import { ChevronRightIcon, CircleIcon, StarIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";


const fetcher = (url:string) => fetch(url).then(res => res.json())

export default function SectionResult({query}:Props) {

    const {data, error}=useSWR<Project[]>(`http://127.0.0.1:8000/projects?search=${query}`,fetcher)
    var loading = !data && !error

    if (error) {
        console.error("Error fetching data:", error);
        return <div>Error: {error.message}</div>;
      }
    
    return(
        <div>
            <p><span className="font-light text-slate-400 italic">Hasil Pencarian : </span> <span className="font-bold"> {query}</span></p>
            <div>
                {loading && "sedang mencari data..."}

                {data && (
                    <div>
                        {data.map((project)=> (
                            <div key={project.id} className="text-left">
                                <div className="py-5">
                                    <div className="block max-h-full overflow-hidden max-w-full p-6 justify-between bg-white border border-gray-200 rounded-lg shadow">
                                        <p>{project.server}</p>
                                        <p className="text-slate-500 font-extralight">{project.name_space}</p>
                                        <div className="relative">
                                          <p className="flex text-2xl font-bold mb-2.5">{project.name}</p>
                                        </div>
                                            <p className="mb-2 text-slate-700 text-sm">{project.description}</p>
                                        <div className="flex space-x-4 text-sm text-slate-400">
                                            <div className="flex items-center">
                                                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400"/>
                                                Project Id : {project.id}
                                            </div>
                                            <div>Visibility : {project.visiblitity}</div>
                                            <div className="flex items-center">
                                                <StarIcon className="mr-1 h-3 w-3" />
                                                {project.star}
                                            </div>
                                        </div>
                                        {JSON.stringify(project.languages)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}