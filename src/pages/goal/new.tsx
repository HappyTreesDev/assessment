import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import Button from '../../components/Button'
import GoalStateField from '../../components/GoalStateField'
import Instructions from '../../components/Instructions'
import Title from '../../components/Title'
import TitleField from '../../components/TitleField'
import GoalsInterface from '../../interface/GoalsInterface'
import { GoalState } from '../../models/goal.model'

export default function NewGoal(): ReactElement {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalState, setGoalState] = useState(GoalState.created);
    const router = useRouter();

    function handleGoalTitleChange(newValue: string) {
        setGoalTitle(newValue);
    }

    function handleGoalStateChange(newValue: GoalState) {
        setGoalState(newValue);
    }

    function handleCreatePressed() {
        GoalsInterface.createGoal({ title: goalTitle, state: goalState, notes: [] });
        router.back();
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
                <Button title={'Create'} onPressed={handleCreatePressed} />
            </main>
        </div>
    )
}