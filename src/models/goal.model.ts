interface GoalType {
    id: number;
    title: string;
    state: GoalState;
    notes: NoteModel[];
    lastUpdated: Date;
}

enum GoalState {
    created = "created",
    inProgress = "inProgress",
    completed = "completed",
}