export function backgroundColoursField(name = 'color', title = 'Color') {
  return {
    name: name,
    title: title,
    type: 'string',
    options: {
      list: [
        {title: 'Black', value: 'black'},
        {title: 'Red', value: 'red-200'},
        {title: 'Green', value: 'green-200'},
        {title: 'Blue', value: 'blue-200'},
        {title: 'Yellow', value: 'yellow-200'},
        {title: 'Indigo', value: 'indigo-200'},
        {title: 'Purple', value: 'purple-200'},
        {title: 'Pink', value: 'pink-200'},
        {title: 'Gray', value: 'gray-200'},
      ],
      layout: 'dropdown', // Ensures it appears as a dropdown in the studio
    },
  }
}

export function textColoursField(name = 'color', title = 'Color') {
  return {
    name: name,
    title: title,
    type: 'string',
    options: {
      list: [
        {title: 'Black', value: 'black'},
        {title: 'Red', value: 'red-700'},
        {title: 'Green', value: 'green-700'},
        {title: 'Blue', value: 'blue-700'},
        {title: 'Yellow', value: 'yellow-700'},
        {title: 'Indigo', value: 'indigo-700'},
        {title: 'Purple', value: 'purple-700'},
        {title: 'Pink', value: 'pink-700'},
        {title: 'Gray', value: 'gray-700'},
      ],
      layout: 'dropdown', // Ensures it appears as a dropdown in the studio
    },
  }
}
