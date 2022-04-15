import Head from 'next/head'
import React, { ReactElement } from 'react'
import api from '../../api'
import Button from '../../components/button'
import Instructions from '../../components/Instructions'
import Title from '../../components/Title'

export default function NewGoal(): ReactElement {
    return (
        <div>
            <Head>
                <title>New Goal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Title>New Goal</Title>
                <Instructions>Create your new goal that you wish to accomplish</Instructions>
                <TitleField />
                <GoalStateField />
                <CreateButton />
            </main>
        </div>
    )
}