import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../../components/Button'
import GoalStateField from '../../components/GoalStateField'
import Instructions from '../../components/Instructions'
import Title from '../../components/Title'
import TitleField from '../../components/TitleField'

export default function NewGoal(): ReactElement {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalState, setGoalState] = useState(GoalState.created);

    function handleGoalTitleChange(newValue: string) {
        setGoalTitle(newValue);
    }

    function handleGoalStateChange(newValue: GoalState) {
        setGoalState(newValue);
    }

    return (
        <div>
            <Head>
                <title>New Goal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Title>New Goal</Title>
                <Instructions>Create your new goal that you wish to accomplish</Instructions>
                <TitleField value={goalTitle} onChange={handleGoalTitleChange} />
                <GoalStateField value={goalState} onChange={handleGoalStateChange} />
                <Button title={''} onPressed={function (): void {
                    throw new Error('Function not implemented.')
                }} />
            </main>
        </div>
    )
}