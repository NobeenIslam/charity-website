import ctaButton from '../misc/ctaButton'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
        }),
    },
    ctaButton,
  ],
}
