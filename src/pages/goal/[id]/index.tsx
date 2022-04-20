import { useRouter } from "next/router";
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import Button from "../../../components/Button";
import EditableNote from "../../../components/EditableNote";
import GoalStatusSelection from "../../../components/GoalStatusSelection";
import useGoal from "../../../hooks/useGoal";
import GoalsInterface from "../../../interface/GoalsInterface";
import StyleSheet from './index.module.css';

export default function ViewGoal(): ReactElement {
    const router = useRouter();
    const [goal, notes] = useGoal(parseInt(router.query.id as string));
    const [newNote, setNewNote] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    useEffect(() => {
        if (goal) {
            setNewTitle(goal.title);
        }
    }, [goal]);

    function handleAddNotePressed() {
        if (goal != null && goal.id != null) {
            GoalsInterface.addNote(goal.id!, newNote);
            setNewNote('');
        }
    }

    function handleNewNoteChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewNote(event.target.value);
    }

    function handleEditModeToggle() {
        if (editMode) {
            const newGoal = {
                ...goal!,
                title: newTitle,
            }
            GoalsInterface.updateGoal(newGoal);
        }
        setEditMode(!editMode);
    }

    if (goal == undefined) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            <div className={StyleSheet.header}>
                <div className={StyleSheet.headerData}>
                    {editMode
                        ? <input
                            className={StyleSheet.titleEntry}
                            type="text"
                            value={newTitle}
                            onChange={(event) => { setNewTitle(event.target.value) }}
                        />
                        : <div className={StyleSheet.goalTitle}>{goal.title}</div>
                    }
                    <GoalStatusSelection goal={goal} />
                </div>
                <Button title={editMode ? 'Save' : 'Edit Title'} onPressed={handleEditModeToggle} />
                <Button title="Back" onPressed={() => router.back()} />
            </div>
            <hr />
            <div className={StyleSheet.notesListTitle}>Notes:</div>
            <ul className={StyleSheet.notesList}>
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
            <hr />
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
            <div className={StyleSheet.deleteButton}>
                <Button title="Delete Goal" onPressed={() => {
                    GoalsInterface.deleteGoal(goal.id!).then(() => router.back());
                }} />
            </div>
        </div>
    );
}