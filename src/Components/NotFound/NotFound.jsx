import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-uppercase mb-3">Not Found Page</h1>
        <p className='text-capitalize fs-4'>
          to get the main page of website <Link className='text-uppercase text-decoration-none' to="">click here</Link>
        </p>
      </div>
    </section>
  );
}
