import { useRouter } from "next/router";
import React, { ChangeEvent, ReactElement, useState } from "react";
import Button from "../../../components/Button";
import EditableNote from "../../../components/EditableNote";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";
import { GoalStateToString } from "../../../models/goal.model";
import * as StyleSheet from './index.module.css';

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
            <div className={StyleSheet.header}>
                <div className={StyleSheet.headerData}>
                    <div className={StyleSheet.goalTitle}>{goal?.title}</div>
                    <div className={StyleSheet.goalState}>{GoalStateToString(goal?.state!)}</div>
                </div>
                <Button title="Edit Goal" onPressed={() => router.push(`${goal?.id}/edit`)} />
                <Button title="Back" onPressed={() => router.back()} />
            </div>
            <hr />
            <div className={StyleSheet.notesListTitle}>Notes:</div>
            <ul className={StyleSheet.notesList}>
                {
                    notes.map((note, index) => {
                        return (
                            <li key={note.id}>
                                <EditableNote note={note} />
                                {index < notes.length - 1 ?
                                    <hr /> :
                                    null
                                }
                            </li>
                        );
                    })
                }
            </ul>
            <div className={StyleSheet.newTextArea}>
                <textarea
                    className={StyleSheet.textArea}
                    value={newNote}
                    onChange={handleNewNoteChanged}
                    name="New Note"
                    placeholder='Start typing and press "Add Note" to add a note.'
                />
                <Button title="Add Note" onPressed={handleAddNotePressed} primary />
            </div>
        </div>
    );
}