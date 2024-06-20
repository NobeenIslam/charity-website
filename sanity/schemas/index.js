import project from './documents/project-schema.js'
import navbar from './documents/navbar-schema.js'
import page from './documents/page-schema.js'
import navItem from './misc/navItem.js'
import homepageHero from './blocks/homepageHero-schema.js'
import infoPanel from './blocks/infoPanel-schema.js'
import engagementBanner from './blocks/engagementBanner-schema.js'
import projectGrid from './blocks/projectGrid.js'
import footer from './documents/footer-schema.js'
import iconLink from './misc/iconLink.js'

//Add document schema here
const documentTypes = [page, navbar, project, footer]

//Add block schema here
const blockTypes = [homepageHero, infoPanel, engagementBanner, projectGrid]

//Add schemas here for the building block types in misc
const miscTypes = [navItem, iconLink]

export const schemaTypes = [...documentTypes, ...blockTypes, ...miscTypes]

export default schemaTypes
