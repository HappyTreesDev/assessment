import Head from 'next/head'
import React from 'react'
import api from '../../api'
import Button from '../../components/button'

const Home: React.FC = () => {
    api
        .service('goals')
        .find({})
        .then(console.log)

    return (
        <div>
            <Head>
                <title>New Goal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>New Goal</h1>
                <Button title={'Create'} onPressed={() => {
                    api.service('/goals').create({ goalTitle: 'title to try' })
                }} />
            </main>
        </div>
    )
}

export default Home
