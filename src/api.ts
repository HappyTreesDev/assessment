import feathers from '@feathersjs/feathers'
import service from 'feathers-memory'

const app = feathers()

app.use('/goals', service());
app.use('/notes', service());

export default app