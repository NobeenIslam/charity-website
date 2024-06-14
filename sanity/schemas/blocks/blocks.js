
//Add block type here
const allBlocks = [
  {type: 'project', title: 'Project'},
  {type: 'homepageHero', title: 'Homepage Hero'},
  {type: 'infoPanel', title: 'Info Panel'},
  {type: 'engagementBanner', title: 'Engagement Banner'},
]

export default () => {
  return {
    title: 'Blocks',
    name: 'blocks',
    type: 'array',
    of: [...allBlocks],
    codegen: {required: true},
    validation: (Rule) => [Rule.required().min(1).error('At least 1 block is required')],
  }
}
