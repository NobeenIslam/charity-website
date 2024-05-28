// /schemas/link-schema.ts

export default ({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    ({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    ({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
