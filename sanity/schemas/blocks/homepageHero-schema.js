import ctaButton from '../misc/ctaButton'

export default {
  name: 'homepageHero',
  title: 'Homepage Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
    ctaButton,
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage Hero',
      }
    },
  },
}
