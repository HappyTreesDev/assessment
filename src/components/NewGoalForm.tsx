import React, { useState } from "react";
import GoalsInterface from "../interface/GoalsInterface";
import GoalType, { GoalState } from "../models/goal.model";
import Button from "./Button";
import GoalStateField from "./GoalStateField";
import TitleField from "./TitleField";
import StyleSheet from './NewGoalForm.module.css';

export default function NewGoalForm() {
    const [title, setTitle] = useState('');
    const [state, setState] = useState(GoalState.created);

    function handleNewGoalPressed() {
        GoalsInterface.createGoal({
            title: title,
            state: state,
        } as GoalType);

        setTitle('');
        setState(GoalState.created);
    }

    return (
        <>
            <hr />
            <div className={StyleSheet.newGoalForm}>
                <div className={StyleSheet.dataFields}>
                    <TitleField value={title} onChange={(newTitle) => setTitle(newTitle)} />
                    <GoalStateField value={state} onChange={(newState) => setState(newState)} />
                </div>
                <Button title="Add New Goal" onPressed={handleNewGoalPressed} />
            </div>
            <hr />
        </>
    );
}