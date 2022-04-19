import feathers from '@feathersjs/feathers'
import service from 'feathers-memory'
import createdHook from './api_hooks/createdHook';
import lastUpdatedHook from './api_hooks/lastUpdatedHook';

const app = feathers()

app.use('/goals', service());
app.use('/notes', service());

// Add Hooks
app.service('/goals').hooks({
    before: {
        create: [createdHook]
    }
});
app.service('/notes').hooks({
    before: {
        create: [lastUpdatedHook],
        update: [lastUpdatedHook],
        patch: [lastUpdatedHook]
    }
})
export default app