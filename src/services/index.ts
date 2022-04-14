import { Application } from '../declarations';
import goals from './goals/goals.service';
import notes from './notes/notes.service';

export default function (app: Application) {
    app.configure(goals);
    app.configure(notes);
}