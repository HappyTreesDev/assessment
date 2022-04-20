import React, { useState } from "react";
import useGoals from "../hooks/useGoals";
import GoalType, { GoalState } from "../models/goal.model";
import GoalListRow from "./GoalListRow";
import StyleSheet from './GoalList.module.css';

export default function GoalList() {
    const goals = useGoals();
    const [filter, setFilter] = useState<GoalState[]>([
        GoalState.created,
        GoalState.inProgress,
        GoalState.completed,
    ]);

    const filteredGoals = goals
        .filter((goal) => filter.includes(goal.state))
        .map((goal: GoalType) => {
            return (
                <div key={goal.id}>
                    <GoalListRow goalId={goal.id ?? -1} />
                    <hr className={StyleSheet.lightDivider} />
                </div>
            );
        });

    function handleFilterChanged(selection: GoalState) {
        if (filter.includes(selection)) {
            setFilter(filter.filter(state => state !== selection));
        } else {
            setFilter([
                ...filter,
                selection,
            ]);
        }
    }

    return (
        <>
            <div className={StyleSheet.filterSection}>
                <div className={StyleSheet.filtersTitle}>Filters</div>
                <div className={StyleSheet.filter}>
                    <div>Created:</div>
                    <input
                        type="checkbox"
                        checked={filter.includes(GoalState.created)}
                        onChange={() => handleFilterChanged(GoalState.created)}
                    />
                </div>
                <div className={StyleSheet.filter}>
                    <div>In Progress:</div>
                    <input
                        type="checkbox"
                        checked={filter.includes(GoalState.inProgress)}
                        onChange={() => handleFilterChanged(GoalState.inProgress)}
                    />
                </div>
                <div className={StyleSheet.filter}>
                    <div>Completed:</div>
                    <input
                        type="checkbox"
                        checked={filter.includes(GoalState.completed)}
                        onChange={() => handleFilterChanged(GoalState.completed)}
                    />
                </div>
            </div>
            <ul>
                {filteredGoals}
            </ul>
        </>

    )
}