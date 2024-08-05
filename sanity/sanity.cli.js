import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'p4piayq8',
    dataset: process.env.NODE_ENV === 'development' ? 'development' : 'production', //development and production are the actual names of the datasets
  },
})
