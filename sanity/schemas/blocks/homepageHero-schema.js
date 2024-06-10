import ctaButton from "../misc/ctaButton";

export default ({
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
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      ctaButton
    ],
  })
  