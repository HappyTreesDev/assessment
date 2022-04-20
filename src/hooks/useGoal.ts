import { useEffect, useMemo, useState } from "react";
import api from "../api";
import GoalsInterface from "../interface/GoalsInterface";
import GoalType from "../models/goal.model";
import { NoteType } from "../models/note.model";

export default function useGoal(id: number): [goal: GoalType | undefined, notes: NoteType[]] {
    const [goal, setGoal] = useState<GoalType | undefined>();
    const [notes, setNotes] = useState<NoteType[]>([]);

    useMemo(() => {
        GoalsInterface.getGoal(id)
            .then((foundGoal: GoalType) => {
                setGoal(foundGoal);
                GoalsInterface.getNotes(foundGoal.notes).then((newNotes) => {
                    setNotes(newNotes);
                });
            });
    }, [id]);

    useEffect(() => {
        function updateGoalHandler(newGoal: GoalType) {
            if (newGoal.id === id) {
                setGoal(newGoal);
            }
        }

        function createHandler(newNote: NoteType) {
            if (newNote.goalId === id) {
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
            }
        };

        function deleteHandler(removed: NoteType) {
            if (removed.goalId === id) {
                const newNotes =
                    notes.filter((note: NoteType) => note.id !== removed.id);
                const newGoal = {
                    ...goal!,
                    notes: [
                        ...newNotes.map((note: NoteType) => note.id!),
                    ],
                };
                setNotes(newNotes);
                setGoal(newGoal);
            }
        };

        function updateHandler(updatedNote: NoteType) {
            if (updatedNote.goalId === id) {
                const index = notes.findIndex((note: NoteType) => note.id === updatedNote.id);
                const newNotes = [
                    ...notes,
                ]
                newNotes[index] = updatedNote;
                setNotes(newNotes);
            }
        };

        api.service('goals').on('updated', updateGoalHandler);
        api.service('notes').on('created', createHandler);
        api.service('notes').on('removed', deleteHandler);
        api.service('notes').on('updated', updateHandler);
        api.service('notes').on('patched', updateHandler);

        return () => {
            api.service('goals').removeListener('updated', updateGoalHandler);
            api.service('notes').removeListener('create', createHandler);
            api.service('notes').removeListener('removed', deleteHandler);
            api.service('notes').removeListener('updated', updateHandler);
            api.service('notes').removeListener('patched', updateHandler);
        }
    }, [id, notes.length]);

    return [goal, notes];
}
