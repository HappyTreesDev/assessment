import api from "../api";
import GoalType from "../models/goal.model";
import { NoteType } from "../models/note.model";

class GoalsInterface {
    static _goalsService = api.service('/goals');
    static _notesService = api.service('/notes');

    static async createGoal(goal: GoalType): Promise<GoalType> {
        return this._goalsService.create(goal);
    }

    static async updateGoal(goal: GoalType) {
        this._goalsService.update(goal.id, goal);
    }

    static async deleteGoal(goalId: number) {
        this._goalsService.remove(goalId);
    }

    static async addNote(note: NoteType) {
        const newNote = this._notesService.create(note);
        const goal = await this._getGoal(note.goalId);
        goal.notes.push(newNote.id);
        this._goalsService.update(goal);
    }

    static async removeNote(noteId: number) {
        const note = await this._getNote(noteId);
        const goal = await this._getGoal(note.goalId);
        goal.notes.indexOf(noteId);
    }

    static async _getNote(noteId: number): Promise<NoteType> {
        return await this._notesService.get(noteId);
    }

    static async _getGoal(goalId: number): Promise<GoalType> {
        return await this._goalsService.get(goalId);
    }
}

export default GoalsInterface;