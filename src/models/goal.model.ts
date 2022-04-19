export default interface GoalType {
    id?: number;
    title: string;
    state: GoalState;
    notes: number[];
    lastUpdated?: Date;
}

export enum GoalState {
    created = "created",
    inProgress = "inProgress",
    completed = "completed",
}

export function GoalStateToString(state: GoalState): string {
    switch (state) {
        case GoalState.created:
            return "Created";
        case GoalState.inProgress:
            return "In Progress";
        case GoalState.completed:
            return "Completed"
        default:
            return "Unknown State";
    }
}
