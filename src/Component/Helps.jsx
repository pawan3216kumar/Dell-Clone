import React from 'react'
import { Help } from '../Data/Data1'

const Helps = () => {
    return (
        <div className='bg-slate-700 text-white p-5 border'>
            <div className='mt-10'>
                <h4 className='text-xl mt-3'>Dell Support</h4>
                <h1 className='text-2xl mt-3'>W're Here To Help</h1>
                <p className='text-xl mt-3'>From offering expert advice to solving complex problems , we've got you covered</p>
            </div>

            <div className='flex align-center justify-between gap-5 mb-10 mt-10'>
                {Help.map((ele , i) => (
                    <div key = {i}>
                        <div className='rounded-xl'>
                            <img src={ele.image} alt="" />
                        </div>
                        <div className='text-xl'>
                            {ele.title}
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center  bg-slate-700'>
            <img 
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-account-desktop-pan-dell-bulk-0455.jpg?wid=448" 
                alt="Centered" 
                className="w-full max-w-screen-lg h-auto"
            />
        </div>

        </div>
    )
}

export default Helps
