import blocks from '../blocks/blocks'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'isNavOnLightBackground',
      title: 'Is Nav Bar on a Light background',
      type: 'boolean',
      initialValue: false,
      description: 'Enable for pages with light backgrounds to use dark text in the NavBar',
    },
    blocks(),
  ],
}
