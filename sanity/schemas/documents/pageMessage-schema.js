import ctaButton from '../misc/ctaButton'
import {coloursField} from '../misc/colours'

export default {
  name: 'pageMessage',
  title: 'Page Message',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    coloursField('titleColour', 'Title Colour'),

    {
      name: 'description',
      title: 'Description',
      type: 'text',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    coloursField('descriptionColour', 'Description Colour'),
    ctaButton,
  ],
}
