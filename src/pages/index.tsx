import Head from 'next/head'
import React from 'react'
import GoalList from '../components/GoalList'
import Introduction from '../components/Introduction'
import StyleSheet from './index.module.css';
import NewGoalForm from '../components/NewGoalForm';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Coachify Assessment</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={StyleSheet.appFrame}>
                <Introduction />
                <NewGoalForm />
                <GoalList />
            </main>
        </div>
    )
}

export default Home
