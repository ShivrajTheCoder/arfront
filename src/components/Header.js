import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <section className='flex flex-row'>
      <div>
        ARTRavels logo
      </div>
      <div className='ml-auto flex flex-row'>
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Contact Us</h1>
      </div>
    </section>
  )
}
