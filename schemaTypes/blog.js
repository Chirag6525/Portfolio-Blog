import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [
            {type: 'block'},
            {type : 'image'}  
        ]
      }),
      defineField({
        name: 'metadesc',
        type: 'string',
        title: 'MetaDesc'
      }),
      defineField(
        {
            title: 'Blog',
            name: 'BlogImage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              }
            ]
        }),
      defineField({
        name: 'Date',
        type: 'datetime',
        title: 'Created at'
      }),
      {
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      }
  ],
})