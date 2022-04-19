import { useRouter } from "next/router";
import React, { ChangeEvent, ReactElement, useState } from "react";
import Button from "../../../components/Button";
import EditableNote from "../../../components/EditableNote";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";

export default function ViewGoal(): ReactElement {
    const router = useRouter();
    const [goal, notes] = useGoal(parseInt(router.query.id as string));
    const [newNote, setNewNote] = useState('');

    function handleAddNotePressed() {
        if (goal != null && goal.id != null) {
            GoalsInterface.addNote(goal.id!, newNote);
            setNewNote('');
        }
    }

    function handleNewNoteChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewNote(event.target.value);
    }

    return (
        <div>
            <div className="goalTitle">{goal?.title}</div>
            <div className="goalState">{goal?.state}</div>
            <Button title="Edit Goal" onPressed={() => router.push(`${goal?.id}/edit`)} />
            <Button title="Back" onPressed={() => router.back()} />
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
            <textarea value={newNote} onChange={handleNewNoteChanged} />
            <Button title="Add Note" onPressed={handleAddNotePressed} />
        </div>
    );
}