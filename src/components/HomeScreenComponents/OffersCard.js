import Link from 'next/link';
import React from 'react'

export default function OffersCard({ plan }) {
    console.log(plan);
    return (
        <div className='m-10 rounded-md bg-white'>
            <div className=''>
                <img className='h-fit w-fit' src="https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/16:9/pass/GettyImages-539105384.jpg" alt="" />
            </div>
            <div className='mx-5 my-3'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-bold'>{plan.title}</h1>
                    <div className=' bg-[#d00000] px-3 py-1 font-bold ml-auto rounded-md text-white'>
                        6 days+5 nights
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='font-semibold text-lg'>
                        <div><strike>₹ 23,000</strike></div>
                        <div>₹ 19,000</div>
                    </div>
                    <div>
                        <Link href={`/details/${encodeURIComponent(plan.slug)}`}>
                            <button>See Details</button>
                        </Link>
                    </div>
                </div>
                <p>{plan.description.slice(0, 50) + "..."}</p>
                <h2>Exit: {plan.exit}</h2>

            </div>
        </div>
    )
}
