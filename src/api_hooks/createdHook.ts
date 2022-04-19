import { HookContext } from "@feathersjs/feathers";

export default function createdHook(context: HookContext): HookContext {
    context.data.created = Date.now();
    return context;
}