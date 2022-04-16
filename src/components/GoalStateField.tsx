import React, { ReactElement } from "react";
import FormField from "./FormField";

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
            <input
                type="radio"
                value={GoalState.created}
                checked={value === GoalState.created}
                onChange={handleGoalChanged}
            />
            <input
                type="radio"
                value={GoalState.inProgress}
                checked={value === GoalState.inProgress}
                onChange={handleGoalChanged}
            />
            <input
                type="radio"
                value={GoalState.completed}
                checked={value === GoalState.completed}
                onChange={handleGoalChanged}

            />
        </FormField>
    )
}