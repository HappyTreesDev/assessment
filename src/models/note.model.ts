export interface NoteType {
    id?: number;
    goalId: number;
    value: string;
    lastUpdated?: Date;
}