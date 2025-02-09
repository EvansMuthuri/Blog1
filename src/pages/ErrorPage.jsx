import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section>
      <div className="error-center">
        <h2> 404</h2>
        <h3>opps, This Page is Not Found !</h3>
        <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
      </div>
    </section>
  )
}
