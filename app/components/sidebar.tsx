import Link from "next/link";
import { FaHouseChimney  } from "react-icons/fa6";
import { SlHome, SlKey } from "react-icons/sl";
import { PiGitlabLogoSimpleLight } from "react-icons/pi";
import { GoRepo } from "react-icons/go";

export default function Sidebar() {

    const menuItem=(url:string,title:string)=> {
    <li>
        <Link href={url} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <SlHome className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
            <span className="ms-3 mt-1.5">{title}</span>
        </Link>
    </li>
    }

    return(
        <div>
            <aside id="sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Dashboard</span>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href={"/"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <SlHome className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                            <span className="ms-3 mt-1.5">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/token"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <SlKey className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                            <span className="ms-3 mt-1.5">Token</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/gitlab"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <PiGitlabLogoSimpleLight  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                            <span className="ms-3 mt-1.5">Gitlab Server</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/project"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <GoRepo className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                            <span className="ms-3 mt-1.5">Search Repo</span>
                        </Link>
                    </li>
                </ul>
                </div>
            </aside>
        </div>
    )
}