import React, { ReactElement, useState } from "react";
import GoalsInterface from "../interface/GoalsInterface";
import { NoteType } from "../models/note.model";
import Button from "./Button";

interface Props {
    note: NoteType;
    isEditMode?: boolean;
}

export default function EditableNote({ note, isEditMode = false }: Props): ReactElement {
    const [editMode, setEditMode] = useState(isEditMode);

    function toggleEditMode() {
        if (editMode) {
            GoalsInterface.updateNote(note);
        }
        setEditMode(!editMode);
    }

    return (
        <div>
            {editMode ?
                <textarea value={note.value} />
                : <p>{note.value}</p>
            }
            <div className="optionsRow">
                <div>{note.lastUpdated}</div>
                <Button title="Delete Note" onPressed={() => { }} />
                <Button title={editMode ? "Save" : "Edit Note"} onPressed={toggleEditMode} />
            </div>
        </div>
    );
}