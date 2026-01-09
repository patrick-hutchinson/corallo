import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {structure} from './structure'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'corallo-studio',

  projectId: 'kdkap5or',
  dataset: 'production',

  schema,

  plugins: [structureTool({structure}), visionTool()],
})
