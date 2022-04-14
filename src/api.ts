import feathers from '@feathersjs/feathers'
import service from 'feathers-memory'

const app = feathers()

app.use('/goals', service());

// TODO remove this later
app.service('/goals').on('created', (message: string) => console.log(message));

export default app