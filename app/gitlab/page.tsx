"use client"
import { deleteGitlab, getGitlab } from "@/app/lib/api"
import Link from "next/link"
import { GoTrash, GoPlus } from "react-icons/go";
import GoTrashIcon from "./del/page";

export default async function Gitlab() {
    const Gitlab = await getGitlab()
    const handleDelete = async (id: string) =>{
            await deleteGitlab(id)
        }
    return (
        <div>
            <p className="font-2xl mt-5 mb-10 font-bold text-center text-3xl">Server Gitlab</p>
            <div className="flex justify-end">
                <Link href={"/gitlab/input"} className="text-center">
                    <p className="bg-gray-500 px-8 text-white rounded-lg py-1.5">Add Gitlab</p>
                </Link>
            </div>
            <div className="grid grid-cols-1">
                {Gitlab.map((gitlab)=> (
                    <div key={gitlab.id} className="text-left">
                        <div className="py-5">
                            <div className="block max-h-full overflow-hidden max-w-full p-6 justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                                <div className="relative">
                                    <p className="font-bold text-2xl mb-2">{gitlab.name}</p>
                                    <GoTrashIcon onDelete={() => handleDelete(gitlab.id)} />
                                </div>
                                    <p className="text-slate-600 font-extralight italic mb-2.5">{gitlab.url}</p>
                                    <p className="text-slate-600 "> <span className="font-light italic">added on date : </span> <span>{gitlab.created_at}</span></p>
                                    <div className={`p-3 mt-1 border-l-4  ${gitlab.status == 'Valid' ? 'bg-green-100 border-green-500 text-green-700' : 'border-orange-500 bg-orange-100 text-orange-800' }`} role="alert">
                                        <p className="font-bold">{gitlab.status}</p>
                                        <p className="text-orange-700 font-light italic overflow-hidden">{gitlab.error}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}