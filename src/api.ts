import feathers from '@feathersjs/feathers'
import service from 'feathers-memory'

const app = feathers()

app.use('/goals', service())

export default app