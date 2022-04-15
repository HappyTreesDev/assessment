import Head from 'next/head'
import React from 'react'
import AddGoalButton from '../components/NewGoalButton'
import GoalList from '../components/GoalList'
import Introduction from '../components/Introduction'
import styles from './index.module.css';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Coachify Assessment</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['app-frame']}>
                <Introduction />
                <GoalList />
                <NewGoalButton />
            </main>
        </div>
    )
}

export default Home
