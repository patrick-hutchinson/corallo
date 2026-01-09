import {type SchemaTypeDefinition} from 'sanity'

import {site} from './site'
import {home} from './singletons/home'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [site, home],
}
