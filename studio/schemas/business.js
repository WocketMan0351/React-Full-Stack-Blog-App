export default {
  name: 'business',
  title: 'Business',
  type: 'document',
  fields: [
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
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      type: 'string',
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'acceptsOnChain',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'acceptsLightning',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
