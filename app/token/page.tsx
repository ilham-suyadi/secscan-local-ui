"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { FaRegTrashCan , FaPlus } from "react-icons/fa6";

const Token: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/api/v1/users/token", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlsaGFtIiwiZXhwIjoxNzAxMDg5NTQ0fQ.RV2JgyaW76YVcze12q2PbBZwoWyjdUa3hDAI7Lxbycwjv0s_HHpPSQaBuJ1emT9HSQTIzc5CNu695dw7UyV63KXgnYBG_jnwgRSrKpy4GxKnPxsJFLR0f33V7qn3m2mTFLhsonfPnGFwrr1dmMflH2f-rpXO3AlvtlxhJGLzSueGtfx-2jq1sU1vZ5Yp3mb_gRJUWi3zi7Wzy98VPn_XHT3OLz4Wc6doU1cRVElnRzrqROcWkyGPwIAqnGe4ifR3AqKG-UGsj7GAnNsbyvjOESNNhZaKpNjpvmnXS87Xh-1btoyLPWsanAvc_Qt1iioHb3sDtyR9OVpyWydFI_BbZQ',        
            }
        });
        const data = await response.json();
        setTokens(data.token);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };

    fetchTokens();
  }, []);

  const max = 75

  return (
    <div>
        <p className="font-2xl mt-5 mb-10 font-bold text-center text-3xl">List Token</p>
        <Link href={"/token/input"} className="relative">
        <button className="relative bg-gray-600 text-white w-60 rounded-lg py-1.5 px-3">
          Add 
            <span className="absolute top-[30%]">
              <FaPlus />
            </span>
        </button>
        </Link>
        <div className="grid grid-cols-1">
        {tokens.map((token) => (
            <div key={token.id} className="text-left" >
            <div className="py-5">
                <div className="block max-h-full overflow-hidden max-w-full p-6 justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <div className="relative">
                    <Link href={`/token/${token.id}`} className="font-bold text-2xl mb-2 text-left">{token.token_name}</Link>
                    <Link href={`/token/${token.id}`}><span className="absolute right-4 top-[30%] text-lg"><FaRegTrashCan /></span></Link>
                  </div>
                    <p className="text-slate-600 text-sm italic"> <span className="italic text-slate-500">Created : </span>{token.created}</p>
                    <p className=" text-slate-600 text-sm "><span className="italic text-slate-500">Expired : </span>{token.expired}</p>
                    {/* <p className="pt-5"><TextLimit text={token.token} maxLength={max}/> </p> */}
                    <p className="pt-5">{token.token}</p>
                </div>
            </div>
            </div>
            
        ))}
        </div>
    </div>
  );
};

export default Token;
