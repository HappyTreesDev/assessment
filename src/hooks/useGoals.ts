import { useEffect, useMemo, useState } from "react";
import api from "../api";
import GoalType from "../models/goal.model";

export default function useGoals(): GoalType[] {
    const [goals, setGoals] = useState<GoalType[]>([]);

    useMemo(() => {
        api.service('goals').find()
            .then((goals: GoalType[]) => {
                console.log(goals);
                setGoals(goals);
            });
    }, []);

    useEffect(() => {
        function createHandler(newGoal: GoalType) {
            const newGoals = [
                ...goals,
                newGoal,
            ];
            setGoals(newGoals);
        };

        function deleteHandler(removed: GoalType) {
            const newGoals =
                goals.filter((goal: GoalType) => goal.id !== removed.id);
            setGoals(newGoals);
        };

        function updateHandler(updatedGoal: GoalType) {
            const index = goals.findIndex((goal: GoalType) => goal.id === updatedGoal.id);
            const newGoals = [
                ...goals,
            ]
            newGoals[index] = updatedGoal;
            setGoals(newGoals);
        };

        api.service('goals').on('created', createHandler);
        api.service('goals').on('removed', deleteHandler);
        api.service('goals').on('updated', updateHandler);
        api.service('goals').on('patched', updateHandler);

        return () => {
            api.service('goals').removeListener('create', createHandler);
            api.service('goals').removeListener('removed', deleteHandler);
            api.service('goals').removeListener('updated', updateHandler);
            api.service('goals').removeListener('patched', updateHandler);
        }
    });
    return goals;
}