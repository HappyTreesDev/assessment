import { useMemo, useState } from "react";
import api from "../api";
import GoalType from "../models/goal.model";

export default function useGoal(id: number): GoalType | undefined {
    const [goal, setGoal] = useState<GoalType | undefined>();

    useMemo(() => {
        api.service('goals').get(id)
            .then((foundGoal: GoalType[]) => {
                setGoal(foundGoal[0]);
            });
    }, []);

    return goal;
}
