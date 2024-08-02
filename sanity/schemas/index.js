import project from './documents/project-schema.js'
import navbar from './documents/navbar-schema.js'
import page from './documents/page-schema.js'
import navItem from './misc/navItem.js'
import hero from './blocks/hero-schema.js'
import infoPanel from './blocks/infoPanel-schema.js'
import engagementBanner from './blocks/engagementBanner-schema.js'
import projectGrid from './blocks/projectGrid.js'
import footer from './documents/footer-schema.js'
import iconLink from './misc/iconLink.js'
import solitaryPageMessage from './documents/pageMessage-schema.js'

//Add document schema here
const documentTypes = [page, navbar, project, footer, solitaryPageMessage]

//Add block schema here
const blockTypes = [hero, infoPanel, engagementBanner, projectGrid]

//Add schemas here for the building block types in misc
const miscTypes = [navItem, iconLink]

export const schemaTypes = [...documentTypes, ...blockTypes, ...miscTypes]

export default schemaTypes
