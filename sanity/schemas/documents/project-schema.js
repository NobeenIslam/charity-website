import ctaButton from '../misc/ctaButton'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name:'slug',
      title:'Slug',
      type:'slug'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'card',
      title: 'Card',
      type: 'object',
      fields: [
        {
          name: 'summary',
          title: ' Summary',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
        ctaButton,
      ],
    },
    {
      name: 'page',
      title: 'Page',
      type: 'object',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'primaryTextSection',
          title: 'Primary Text Section',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'secondaryTextSection',
          title: 'Secondary Text Section',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'postImages',
          title: 'Images For Page',
          type: 'array',
          of: [{type: 'image'}],
          validation: (Rule) =>
            Rule.max(2).error('The project page only supports 2 images at the moment'),
        },
        ctaButton,
      ],
    },
  ],
}
