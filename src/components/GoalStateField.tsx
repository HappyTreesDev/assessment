import React, { ReactElement } from "react";
import { GoalState } from "../models/goal.model";
import FormField from "./FormField";
import StyleSheet from './GoalStateField.module.css';

interface Props {
    value: GoalState;
    onChange: (newValue: GoalState) => void;
}

export default function GoalStateField({ value, onChange }: Props): ReactElement {
    function handleGoalChanged(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value as GoalState);
    }

    return (
        <FormField fieldName={'Goal State'}>
            <div className={StyleSheet.stateSelectors}>
                <div className={StyleSheet.stateSelector}>
                    <div>Created:</div>
                    <input
                        type="radio"
                        value={GoalState.created}
                        checked={value === GoalState.created}
                        onChange={handleGoalChanged}
                    />
                </div>
                <div className={StyleSheet.stateSelector}>
                    <div>In Progress:</div>
                    <input
                        type="radio"
                        value={GoalState.inProgress}
                        checked={value === GoalState.inProgress}
                        onChange={handleGoalChanged}
                    />
                </div>
                <div className={StyleSheet.stateSelector}>
                    <div>Completed:</div>
                    <input
                        type="radio"
                        value={GoalState.completed}
                        checked={value === GoalState.completed}
                        onChange={handleGoalChanged}
                    />
                </div>
            </div>
        </FormField>
    )
}