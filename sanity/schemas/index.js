import project from './blocks/project-schema.js'
import navbar from './documents/navbar-schema.js'
import page from './documents/page-schema.js'
import navItem from './misc/navItem.js'
import homepageHero from './blocks/homepageHero-schema.js'
import infoPanel from './blocks/infoPanel-schema.js'
import engagementBanner from './blocks/engagementBanner-schema.js'

//Add document schema here
const documentTypes = [page, navbar]

//Add block schema here
const blockTypes = [project, navItem, homepageHero, infoPanel, engagementBanner]

export const schemaTypes = [...documentTypes, ...blockTypes]

export default schemaTypes
