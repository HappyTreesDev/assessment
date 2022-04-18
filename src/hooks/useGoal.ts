import { useMemo, useState } from "react";
import { setFlagsFromString } from "v8";
import api from "../api";
import apiHooks from "../api.hooks";
import GoalsInterface from "../interface/GoalsInterface";
import GoalType from "../models/goal.model";
import { NoteType } from "../models/note.model";

export default function useGoal(id: number): [goal: GoalType | undefined, notes: NoteType[]] {
    const [goal, setGoal] = useState<GoalType | undefined>();
    const [notes, setNotes] = useState<NoteType[]>([]);

    async function getNote(noteId: number): Promise<NoteType> {
        return await GoalsInterface.getNote(noteId);
    }

    useMemo(() => {
        GoalsInterface.getGoal(id)
            .then((foundGoal: GoalType) => {
                setGoal(foundGoal);
                foundGoal.notes.forEach((noteId) => {
                    getNote(noteId).then((note) => {
                        notes.push(note);
                        setNotes(notes);
                    });
                });
            });
    }, [id]);

    useMemo(() => {
        function handler(newNote: NoteType) {
            notes.push(newNote);
            setNotes(notes);
        };

        api.service('notes').on('create', handler);

        return () => {
            api.service('notes').removeListener('create', handler);
        }
    }, [id]);

    return [goal, notes];
}
