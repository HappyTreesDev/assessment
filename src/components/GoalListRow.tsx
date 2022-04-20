import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import useGoal from "../hooks/useGoal";
import { GoalState } from "../models/goal.model";
import Button from "./Button";
import EditableNote from "./EditableNote";
import StyleSheet from './GoalListRow.module.css';

interface Props {
    goalId: number;
}
export default function GoalListRow({ goalId }: Props): ReactElement {
    const router = useRouter();
    const [goal, notes] = useGoal(goalId);
    const [expanded, setExpanded] = useState(false);

    const goalStateStyle = goal?.state === GoalState.created
        ? StyleSheet.goalStateCreated
        : goal?.state === GoalState.inProgress
            ? StyleSheet.goalStateInProgress
            : StyleSheet.goalStateComplete;
    return (
        <div key={goal?.id} className={StyleSheet.goal}>
            <div className={StyleSheet.goalRow}>
                <div className={StyleSheet.goalTitle}>
                    {goal?.title}
                </div>
                <div className={goalStateStyle + ' ' + StyleSheet.goalState}>
                    {goal?.state}
                </div>
                <Button title={'View Goal'} onPressed={() => {
                    router.push(`/goal/${goal?.id}`);
                }} />
            </div>
            <div className={StyleSheet.notesExpanderContainer}>
                <Button
                    className={StyleSheet.notesExpander}
                    disabled={notes.length < 1}
                    title={expanded ? 'Notes ▲' : 'Notes ▼'}
                    onPressed={() => setExpanded(!expanded)}
                />
            </div>
            {expanded
                ? notes.map((note) => <EditableNote note={note} canEdit={false} />)
                : null
            }
        </div>
    );
}