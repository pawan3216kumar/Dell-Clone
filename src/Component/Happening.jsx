import React from 'react'
import { HappeningData } from '../Data/Data1'

const Happening = () => {
    return (
        <div className='bg-slate-700 gap-5'>
            <div className='text-white'>
                <p className='xl pt-4'>Latest from Dell Technologies</p>
                <h1 className='text-3xl pt-3'>What's Happening</h1>
            </div>
            <div className='flex gap-3 pt-5'>
            {HappeningData.map((ele, i) => (
                <div key={i} className="relative bg-slate-500 rounded-lg overflow-hidden">
                    <div className="relative">
                        <img src={ele.image} alt={ele.description} className="w-full h-96 object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white">
                            <h2 className="text-base">{ele.Caption}</h2>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{ele.description}</h2>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Happening
