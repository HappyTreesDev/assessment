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