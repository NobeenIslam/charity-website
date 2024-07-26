export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Nav Item Title',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Nav Item Link',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
  ],
}
