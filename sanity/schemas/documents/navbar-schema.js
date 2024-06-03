
export default {
  name: 'navBar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{type: 'navItem'}],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
