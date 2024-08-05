import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'charity-website-studio',

  projectId: 'p4piayq8',
  dataset: process.env.NODE_ENV === 'development' ? 'development' : 'production', //development and production are the actual names of the datasets

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})


