const coloursField = (name = 'color', title = 'Color') => {
  return {
    name: name,
    title: title,
    type: 'string',
    options: {
      list: [
        {title: 'Red', value: 'bg-red-500'},
        {title: 'Green', value: 'bg-green-500'},
        {title: 'Blue', value: 'bg-blue-500'},
        {title: 'Yellow', value: 'bg-yellow-500'},
        {title: 'Indigo', value: 'bg-indigo-500'},
        {title: 'Purple', value: 'bg-purple-500'},
        {title: 'Pink', value: 'bg-pink-500'},
        {title: 'Gray', value: 'bg-gray-500'},
        // Add more colors as needed
      ],
      layout: 'dropdown', // Ensures it appears as a dropdown in the studio
    },
  }
}

export {coloursField}
