export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'mainText',
      title: 'Main Text',
      type: 'string',
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'navItem'}],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'iconLink'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
