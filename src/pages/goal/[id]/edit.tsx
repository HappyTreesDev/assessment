import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import Button from "../../../components/Button";
import GoalStateField from "../../../components/GoalStateField";
import TitleField from "../../../components/TitleField";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";
import GoalType, { GoalState } from "../../../models/goal.model";

export default function Edit(): ReactElement {
    const router = useRouter();
    const goal = useGoal(parseInt(router.query.id));
    const [title, setTitle] = useState(goal.title);
    const [state, setState] = useState(goal.state);

    function handleTitleChanged(value: string) {
        setTitle(value);
    }

    function handleStateChanged(value: GoalState) {
        setState(value);
    }

    function handleDeletePressed() {
        GoalsInterface.deleteGoal(goal?.id ?? -1);
    }

    function handleSavePressed() {
        GoalsInterface.updateGoal(goal!);
    }

    return (
        <div>
            <TitleField value={goal.title} onChange={handleTitleChanged} />
            <GoalStateField value={goal.state} onChange={handleStateChanged} />
            {/*<EditableNotes/>*/}
            <Button title={'Delete Goal'} onPressed={handleDeletePressed} />
            <Button title={'Save Goal'} onPressed={handleSavePressed} />
        </div>
    );
}
