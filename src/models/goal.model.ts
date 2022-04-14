interface GoalType {
    id: number;
    title: string;
    state: "created" | "inProgress" | "completed"
    notes: NoteModel[];
    lastUpdated: Date;
}
