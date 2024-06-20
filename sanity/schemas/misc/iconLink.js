export default {
  name: 'iconLink',
  title: 'Icon Link',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https'],
        }),
    },
  ],
}
