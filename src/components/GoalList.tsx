import React, { useState } from "react";
import useGoals from "../hooks/useGoals";
import GoalType from "../models/goal.model";
import GoalListRow from "./GoalListRow";

export default function GoalList() {
    const goals = useGoals();
    const goalItems = goals.map((goal: GoalType) => {
        return (
            <GoalListRow goal={goal} />
        );
    });

    return (
        <ul>
            {goalItems}
        </ul>
    )
}