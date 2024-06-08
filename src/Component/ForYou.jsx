import React from 'react'

const ForYou = () => {
    return (
        <div className='bg-slate-700 text-white border p-5 '>
            <h2 className='text-2xl m-5'>For You</h2>
            <div className='flex bg-slate-700 justify-around text-white pt-8 pb-10 h-96'>
                <div className='bg-slate-500 '>

                    <div className='ml-10 p-4'>
                        <div className='text-2xl gap-6'>Best Sellers</div>
                        <div className='flex mt-10'>
                            <div className='pt-3'>
                                <img src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xps-13-9320-15-9520.png" />
                            </div>
                            <h2 className='text-xl'>Get our best laptops for less</h2>
                        </div>
                        <div className='mt-4 text-xl'>Shop Now</div>
                    </div>

                </div>

                <div className='bg-slate-500 text-xl p-4 '>
                    <h2 className='mt-5 text-2xl'>Student Purchase Program</h2>
                    <p className='mt-14'>Get Special discount under our Student Purchase  </p>
                    <p className='pt-14'>Learn More</p>
                </div>
                <div className='bg-slate-500'>
                    <h2 className='text-2xl p-5'>Access My Account </h2>
                    <p className='mt-10 text-xl'>Sign to your account to track & view your orders</p>
                    <p className='text-xl p-14'> Sign in</p>
                </div>
            </div>
        </div>

    )
}

export default ForYou
