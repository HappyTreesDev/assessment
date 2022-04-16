import React, { ReactElement, useState } from "react";
import Button from "../../../components/Button";
import GoalStateField from "../../../components/GoalStateField";
import TitleField from "../../../components/TitleField";
import GoalsInterface from "../../../interface/GoalsInterface";
import GoalType, { GoalState } from "../../../models/goal.model";

interface Props {
    goal: GoalType;
}

export default function Edit({ goal }: Props): ReactElement {
    const [title, setTitle] = useState(goal.title);
    const [state, setState] = useState(goal.state);

    function handleDeletePressed() {
        // TODO
    }

    function handleSavePressed() {
        // TODO
    }

    return (
        <div>
            <TitleField value={title} onChange={(value: string) => { }} />
            <GoalStateField value={state} onChange={(value: GoalState) => { }} />
            {/*<EditableNotes/>*/}
            <Button title={'Delete Goal'} onPressed={handleDeletePressed} />
            <Button title={'Save Goal'} onPressed={handleSavePressed} />
        </div>
    );
}