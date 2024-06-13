export default {
  name: 'infoPanel',
  title: 'Info Panel',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
  ],
}
