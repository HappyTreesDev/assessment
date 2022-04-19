import { HookContext } from "@feathersjs/feathers";

export default function lastUpdatedHook(context: HookContext): HookContext {
    context.data.lastUpdated = Date.now();
    return context;
}