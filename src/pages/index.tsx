import Head from 'next/head'
import React from 'react'
import api from '../api'
import Button from '../components/button'

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

        <Button title={'New Goal'} />
      </main>
    </div>
  )
}

export default Home
