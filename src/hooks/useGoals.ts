import { useMemo, useState } from "react";
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

    return goals;
}