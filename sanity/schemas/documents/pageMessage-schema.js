import ctaButton from '../misc/ctaButton'
import {textColoursField} from '../misc/colours'

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
    textColoursField('titleColour', 'Title Colour'),

    {
      name: 'description',
      title: 'Description',
      type: 'text',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    textColoursField('descriptionColour', 'Description Colour'),
    ctaButton,
    {
      name: 'isNavOnLightBackground',
      title: 'Is Nav Bar on a Light background',
      type: 'boolean',
      initialValue: false,
      description: 'Enable for pages with light backgrounds to use dark text in the NavBar',
    },
  ],
}
