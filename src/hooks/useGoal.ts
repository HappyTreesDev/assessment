import { useMemo, useState } from "react";
import api from "../api";
import GoalType from "../models/goal.model";

export default function useGoal(id: number): GoalType | undefined {
    const [goal, setGoal] = useState<GoalType | undefined>();

    useMemo(() => {
        api.service('goals').find(() => {
            id === id
        }).then((foundGoal: GoalType) => {
            setGoal(foundGoal);
        });
    }, []);

    return goal;
}
