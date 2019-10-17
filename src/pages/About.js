import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default AboutPage
