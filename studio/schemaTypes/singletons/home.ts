import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'animation',
      title: 'Animated Logo',
      type: 'file',
    }),
    defineField({
      name: 'catalogue',
      title: 'Catalogue',
      type: 'file',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
})
