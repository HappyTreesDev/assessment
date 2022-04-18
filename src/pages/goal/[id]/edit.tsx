import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Button from "../../../components/Button";
import GoalStateField from "../../../components/GoalStateField";
import TitleField from "../../../components/TitleField";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";
import GoalType, { GoalState } from "../../../models/goal.model";

export default function Edit(): ReactElement {
    const router = useRouter();
    const [goal, notes] = useGoal(parseInt(router.query.id as string));
    const [title, setTitle] = useState('');
    const [state, setState] = useState(GoalState.created);

    useEffect(() => {
        if (goal) {
            setTitle(goal?.title)
            setState(goal?.state)
        }
    }, [goal])

    function handleTitleChanged(value: string) {
        setTitle(value);
    }

    function handleStateChanged(value: GoalState) {
        setState(value);
    }

    function handleDeletePressed() {
        if (goal != null && goal!.id != null) {
            GoalsInterface.deleteGoal(goal!.id!);
        }
        router.back();
    }

    function handleSavePressed() {
        const newGoal = {
            ...goal,
            title: title,
            state: state,
        } as GoalType;

        GoalsInterface.updateGoal(newGoal);
        router.back();
    }

    return (
        <>
            {!!goal ?
                <div>
                    <TitleField value={title} onChange={handleTitleChanged} />
                    <GoalStateField value={state} onChange={handleStateChanged} />
                    {/*<EditableNotes/>*/}
                    <Button title={'Delete Goal'} onPressed={handleDeletePressed} />
                    <Button title={'Save Goal'} onPressed={handleSavePressed} />
                </div> :
                <div>Loading</div>
            }
        </>
    );
}
