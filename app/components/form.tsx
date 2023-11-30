"use client"
import { useState } from 'react';

const TokenForm = () => {
  const [nameToken,setNameToken] = useState('');
  const [Exp,setExpired] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Fetch logic here
    const response = await fetch('http://localhost:3000/api/v1/users/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlsaGFtIiwiZXhwIjoxNzAxMzYwOTkyfQ.uQGsMS6CdTw63MwcLA04jKVgMy_Mqwb5rdU0oqIIFifEjm_JmMS19S5LIZimSSyCZ0Q5tk9k2ksUdJbIBWdUboFWRdDuiCZWVB1c_9kGve9iS56zWX3ao99hF2TN6tqelIowfps4YOWHgWOA34z1Ua0DiYh02hImPzyN-BTfoviYut-bY_zQHu3wIxKNCMXuwl364Sb7qqQarpR1uCnkpXBomeyhzVd87TdqZqyJp5QC-f22JIZ4-aih3hbjDqkwiU7Qf-289ebDDFisHAQlMCX4XRXO9ev2Q3YhgvzeP90XF0l3D0zUzT_nmjiMaH6LSvHwU8ZgXemhkkPr_-jp5g',
      },
      body: JSON.stringify({ name_token: nameToken, expired: Exp }),
    });

    // Handle response as needed
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='relative z-0 w-full mb-6 group'>
            <input name='name' id='name'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 norder-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
              placeholder='' required
              type="text"
              value={nameToken}
              onChange={(e) => setNameToken(e.target.value)}
            />
          <label htmlFor='name' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Name Token
          </label>
        </div>
        <div className='relative'>
          <label className='text-gray-500'>expired date</label>
          <input type="date" className='mt-3 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5'
          value={Exp}
          onChange={(e) => setExpired(e.target.value)}/>
        </div>
        <button type="submit" className='mt-5 text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus-ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center'>Submit</button>
      </form>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/datepicker.min.js"></script>
      {/* <Script/> */}
    </div>
  );
};

export default TokenForm;