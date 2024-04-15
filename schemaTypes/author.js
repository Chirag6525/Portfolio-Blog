import {defineField, defineType} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField(
        {
            name: 'about',
            type: 'string',
            title: 'About'
        }
    ),
    defineField(
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    )    
]
})