import { useEffect, useMemo, useState } from "react";
import api from "../api";
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

    useEffect(() => {
        function handler(newNote: NoteType) {
            const newNotes = [
                ...notes,
                newNote,
            ];
            const newGoal = {
                ...goal!,
                notes: [
                    ...goal?.notes ?? [],
                    newNote.id!,
                ],
            };
            setNotes(newNotes);
            setGoal(newGoal);
        };

        api.service('notes').on('created', handler);

        return () => {
            api.service('notes').removeListener('create', handler);
        }
    });

    return [goal, notes];
}
