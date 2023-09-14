'use client'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/bs'
export default function Home() {
  const handleButtonClick = (e) => {
    e.preventDefault()
    const number = e.target[0].value
    const message = e.target[1].value
    console.log(number);
    console.log(message);

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  return (
    <>

      <div className='pt-3 w-full h-screen overflow-y-hidden bg-slate-100'>

        <p className='text-[#25d366] text-xl flex items-center justify-center gap-x-2'><BsWhatsapp className='' /> NoSaveWhatsApp</p>


        <form className='flex flex-col justify-center  items-center pt-20 gap-y-4' onSubmit={handleButtonClick}>
          <div className='flex items-center gap-x-2 border border-[#25d366] rounded-lg pl-1 pr-2 bg-white'>

            <label className='text-xl'>
              +91
            </label>
            <input
              type="number"
              id="title"
              className=" py-2 px-3  focus:outline-none  transition-colors duration-300"
              placeholder="Enter Phone Number"
              required
              maxLength={10}
            />
          </div>


          <textarea name="" id="" cols="29" rows="10" className='border border-[#25d366] pt-2 focus:outline-none  rounded-lg pl-2' placeholder='Enter the content'></textarea>
          <button type="submit" className="text-white shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
        </form>
      </div>




    </>
  )
}
