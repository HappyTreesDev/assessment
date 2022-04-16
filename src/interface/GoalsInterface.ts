import api from "../api";
import GoalType from "../models/goal.model";

class GoalsInterface {
    static _goalsService = api.service('/goals');

    static createGoal(goal: GoalType): GoalType {
        return this._goalsService.create(goal);
    }

    static updateGoal() {
        // TODO
    }

    static deleteGoal() {
        // TODO
    }

    static addNote() {
        // TODO
    }

    static removeNote() {
        // TODO
    }
}

export default GoalsInterface;