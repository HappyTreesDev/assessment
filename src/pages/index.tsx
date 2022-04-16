import Head from 'next/head'
import React from 'react'
import GoalList from '../components/GoalList'
import Introduction from '../components/Introduction'
import styles from './index.module.css';
import { useRouter } from 'next/router'
import Button from '../components/Button';

const Home: React.FC = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Coachify Assessment</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['app-frame']}>
                <Introduction />
                <Button title={'New Goal'} onPressed={() => router.push('/goal/new')} />
                <GoalList />
            </main>
        </div>
    )
}

export default Home
