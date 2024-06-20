export default {
  name: 'projectGrid',
  title: 'Project Grid',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Project Grid',
      }
    },
  },
}
