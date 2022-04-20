import React from "react";
import GoalsInterface from "../interface/GoalsInterface";
import GoalType, { GoalState } from "../models/goal.model";
import GoalStateField from "./GoalStateField";

interface Props {
    goal: GoalType;
}

export default function GoalStatusSelection({ goal }: Props) {
    return (
        <GoalStateField
            value={goal.state}
            onChange={(newState: GoalState) => {
                const newGoal = {
                    ...goal,
                    state: newState,
                };
                GoalsInterface.updateGoal(newGoal);
            }}
        />
    );
}