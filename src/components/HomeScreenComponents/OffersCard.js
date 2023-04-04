import Link from 'next/link';
import React from 'react'

export default function OffersCard({ plan }) {
    console.log(plan);
    return (
        <div className='m-10'>
            <h1>{plan.title}</h1>
            <p>{plan.description.slice(0, 50) + "..."}</p>
            <h2>Exit: {plan.exit}</h2>
            <Link href={`/details/${encodeURIComponent(plan.slug)}`}>
                <button>See Details</button>
            </Link>

        </div>
    )
}
