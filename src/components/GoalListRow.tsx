import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import GoalType, { GoalState } from "../models/goal.model";
import Button from "./Button";
import styles from './GoalListRow.module.css';

interface Props {
    goal: GoalType;
}
export default function GoalListRow({ goal }: Props): ReactElement {
    const router = useRouter();

    const goalStateStyle = goal.state === GoalState.created
        ? styles.goalStateCreated
        : goal.state === GoalState.inProgress
            ? styles.goalStateInProgress
            : styles.goalStateComplete;
    return (
        <div key={goal.id} className={styles.goalRow}>
            <div className={styles.goalTitle}>
                {goal.title}
            </div>
            <div className={goalStateStyle + ' ' + styles.goalState}>
                {goal.state}
            </div>
            <Button title={'View Goal'} onPressed={() => {
                router.push(`/goal/${goal.id}`);
            }} />
        </div>
    );
}