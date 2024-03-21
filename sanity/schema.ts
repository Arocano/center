import { defineField, type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'promociones',
      title: 'Promociones',
      type: 'document',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 90,
          }
        },
      ],
    },

    {
      name: 'servicios',
      title: 'Servicios',
      type: 'document',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 90,
          }
        },
      ],
    },
    {
      name: 'pista',
      title: 'Pista',
      type: 'document',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 90,
          }
        },
      ],
    },
  ],
}
