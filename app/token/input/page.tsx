import Link from "next/link"
import { FaArrowLeftLong } from "react-icons/fa6";
import TokenForm from "@/app/components/form"

const Input = () => {
    return(
        <div className="py-2">
            <h1 className="mb-10 text-center text-3xl font-bold mt-5">Token</h1>
            <Link href={"/token"} className="relative">
                <button className="relative bg-gray-600 text-white w-60 rounded-lg py-1.5 px-3"> 
                    <FaArrowLeftLong />            
                </button>
            </Link>
            <div className="mt-5">
              <TokenForm/>
            </div>
        </div>
    )
}

export default Input