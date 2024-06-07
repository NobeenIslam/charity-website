import project from './blocks/project-schema.js'
import navbar from './documents/navbar-schema.js'
import page from './documents/page-schema.js'
import navItem from './misc/navItem.js'

const documentTypes = [page, navbar]
const blockTypes = [project, navItem]

export const schemaTypes = [...documentTypes, ...blockTypes]

export default schemaTypes
