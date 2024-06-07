
const allBlocks = [{type: 'project', title: 'Project'}]

export default () => {
  return ({
    title: 'Blocks',
    name: 'blocks',
    type: 'array',
    of: [...allBlocks],
    codegen: {required: true},
    validation: (Rule) => [Rule.required().min(1).error('At least 1 block is required')],
  })
}
