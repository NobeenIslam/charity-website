export default {
  title: 'CTA',
  name: 'ctaButton',
  type: 'object',
  fields: [
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((buttonText, context) => {
          const buttonURL = context.parent.buttonLink
          return buttonText && !buttonURL
            ? 'The Button Link field below must be filled in as well'
            : true
        }),
    },
    {
      title: 'Button - Accessible Label',
      name: 'buttonAccessibleLabel',
      type: 'string',
      description:
        'This will help screen reader users understand where the link will redirect them to.',
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'string',
      validation: (Rule) => [
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https'],
        }),
        Rule.custom((buttonLink, context) => {
          const buttonLabel = context.parent.buttonText
          return buttonLink && !buttonLabel
            ? 'The Button text field above must be filled in as well'
            : true
        }),
      ],
    },
  ],
}
