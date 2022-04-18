import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Button from "../../../components/Button";
import EditableNote from "../../../components/EditableNote";
import Title from "../../../components/Title";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";

export default function ViewGoal(): ReactElement {
    const router = useRouter();
    const [goal, notes] = useGoal(parseInt(router.query.id as string));

    function handleAddNotePressed() {
        if (goal != null && goal.id != null) {
            GoalsInterface.addNote(goal.id!);
        }
    }

    return (
        <div>
            <div className="goalTitle">{goal?.title}</div>
            <div className="goalState">{goal?.state}</div>
            <Button title="Edit Goal" onPressed={() => router.push(`${goal?.id}/edit`)} />
            <hr />
            <div className="notesTitle">Notes:</div>
            <ul className="notesList">
                {
                    notes.map((note) => {
                        return (
                            <li key={note.id}>
                                <EditableNote note={note} />
                            </li>
                        );
                    })
                }
            </ul>
            <Button title="Add Note" onPressed={handleAddNotePressed} />
        </div>
    );
}