import Head from 'next/head'
import React from 'react'
import api from '../api'
import AddGoalButton from '../components/AddGoalButton'
import GoalList from '../components/GoalList'
import Introduction from '../components/Introduction'
import styles from './index.module.css';

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

            <main className={styles['app-frame']}>
                <Introduction />
                <GoalList />
                <AddGoalButton />
            </main>
        </div>
    )
}

export default Home
