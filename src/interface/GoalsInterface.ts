import api from "../api";
import GoalType from "../models/goal.model";
import { NoteType } from "../models/note.model";

class GoalsInterface {
    static _goalsService = api.service('/goals');
    static _notesService = api.service('/notes');

    static async getGoal(goalId: number): Promise<GoalType> {
        return this._goalsService.get(goalId);
    }

    static async createGoal(goal: GoalType): Promise<GoalType> {
        return this._goalsService.create(goal).value;
    }

    static async updateGoal(goal: GoalType): Promise<GoalType> {
        return this._goalsService.update(goal.id, goal);
    }

    static async deleteGoal(goalId: number): Promise<void> {
        const goal = await this.getGoal(goalId);
        goal.notes.forEach(async (noteId) => {
            await this._notesService.remove(noteId);
        });
        return await this._goalsService.remove(goalId);
    }

    static async getNote(noteId: number): Promise<NoteType> {
        return await this._notesService.get(noteId);
    }

    static async addNote(goalId: number, noteValue?: string): Promise<GoalType> {
        const note = {
            goalId: goalId,
            value: noteValue ?? '',
        };
        const noteAddedEvent = await this._notesService.create(note);
        const goal = await this.getGoal(note.goalId);
        goal.notes.push(noteAddedEvent.id);
        return this._goalsService.update(goal.id, goal);
    }

    static async updateNote(note: NoteType): Promise<NoteType> {
        return this._notesService.update(note.id, note);
    }

    static async removeNote(noteId: number): Promise<void> {
        const note = await this.getNote(noteId);
        const goal = await this.getGoal(note.goalId);
        goal.notes.splice(goal.notes.indexOf(noteId), 1);
        await this.updateGoal(goal);
        return this._notesService.remove(noteId);
    }
}

export default GoalsInterface;