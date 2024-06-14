const coloursField = (name = 'color', title = 'Color') => {
  return {
    name: name,
    title: title,
    type: 'string',
    options: {
      list: [
        {title: 'Red', value: 'bg-red-200'},
        {title: 'Green', value: 'bg-green-200'},
        {title: 'Blue', value: 'bg-blue-200'},
        {title: 'Yellow', value: 'bg-yellow-200'},
        {title: 'Indigo', value: 'bg-indigo-200'},
        {title: 'Purple', value: 'bg-purple-200'},
        {title: 'Pink', value: 'bg-pink-200'},
        {title: 'Gray', value: 'bg-gray-200'},
        // Add more colors as needed
      ],
      layout: 'dropdown', // Ensures it appears as a dropdown in the studio
    },
  }
}

export {coloursField}
