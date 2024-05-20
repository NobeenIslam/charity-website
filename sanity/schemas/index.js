import project from './blocks/project-schema.js'
import page from './documents/page-schema.js'

const documentTypes = [page]
const blockTypes = [project]

export const schemaTypes = [...documentTypes, ...blockTypes]

export default schemaTypes
