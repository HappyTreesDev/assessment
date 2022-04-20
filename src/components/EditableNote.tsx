import React, { ChangeEvent, HTMLInputTypeAttribute, ReactElement, useState } from "react";
import GoalsInterface from "../interface/GoalsInterface";
import { NoteType } from "../models/note.model";
import Button from "./Button";
import StyleSheet from './EditableNote.module.css';

interface Props {
    note: NoteType;
    canEdit?: boolean;
}

export default function EditableNote({ note, canEdit = true }: Props): ReactElement {
    const [editMode, setEditMode] = useState(false);
    const [noteText, setNoteText] = useState(note.value);
    const lastUpdatedDate = note.lastUpdated ? new Date(note.lastUpdated) : new Date();

    function toggleEditMode() {
        if (editMode) {
            GoalsInterface.updateNote({
                ...note,
                value: noteText,
            });
        }
        setEditMode(!editMode);
    }

    function handleNoteChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNoteText(event.target.value);
    }

    return (
        <div className={StyleSheet.editableNote}>
            {editMode ?
                <textarea
                    className={StyleSheet.editableNote}
                    value={noteText}
                    onChange={handleNoteChange}
                />
                :
                <p className={StyleSheet.note}>
                    {note.value}
                </p>

            }
            <div className={StyleSheet.optionsRow}>
                <div className={StyleSheet.lastUpdated}>{`Last Updated: ${lastUpdatedDate.toLocaleDateString()}`}</div>
                {canEdit &&
                    <>
                        <Button title="Delete Note" onPressed={() => {
                            if (note.id != null) {
                                GoalsInterface.deleteNote(note.id);
                            }
                        }} />
                        <Button title={editMode ? "Save" : "Edit Note"} onPressed={toggleEditMode} />
                    </>
                }
            </div>
        </div>
    );
}