import Head from 'next/head'
import React from 'react'
import api from '../api'

const Home: React.FC = () => {
  api
    .service('goals')
    .find({})
    .then(console.log)

  return (
    <div>
      <Head>
        <title>Coachify Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Coachify</h1>
      </main>
    </div>
  )
}

export default Home
