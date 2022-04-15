import React, { useState } from "react";
import useGoals from "../hooks/useGoals";

export default function GoalList() {
    const goals = useGoals();
    const goalItems = goals.map((goal: GoalType) => {
        return (
            <div key={goal.id}>{goal.title}</div>
        );
    });

    return (
        <ul>
            {goalItems}
        </ul>
    )
}