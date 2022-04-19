import React, { ChangeEvent, HTMLInputTypeAttribute, ReactElement, useState } from "react";
import GoalsInterface from "../interface/GoalsInterface";
import { NoteType } from "../models/note.model";
import Button from "./Button";

interface Props {
    note: NoteType;
    isEditMode?: boolean;
}

export default function EditableNote({ note, isEditMode = false }: Props): ReactElement {
    const [editMode, setEditMode] = useState(isEditMode);
    const [noteText, setNoteText] = useState(note.value);

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
        <div>
            {editMode ?
                <textarea value={noteText} onChange={handleNoteChange} />
                : <p>{note.value}</p>
            }
            <div className="optionsRow">
                <div>{note.lastUpdated}</div>
                <Button title="Delete Note" onPressed={() => {
                    if (note.id != null) {
                        GoalsInterface.deleteNote(note.id);
                    }
                }} />
                <Button title={editMode ? "Save" : "Edit Note"} onPressed={toggleEditMode} />
            </div>
        </div>
    );
}