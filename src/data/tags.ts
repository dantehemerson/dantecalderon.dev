export interface ITag {
  title: string,
  slug: string,
  color?: string,
  textColor?: string
}

export const tags: Record<string, ITag> =  {
  nodejs: {
    title: 'Node.js',
    slug: 'nodejs',
    color: '#568155',
    textColor: 'white'
  },
  mongodb: {
    title: 'MongoDB',
    slug: 'mongodb',
    color: '#42a36a',
    textColor: 'white'
  },
  notes: {
    title: '📝 Notes',
    slug: 'notes',
    color: '#f1d83d',
    textColor: '#505050'
  }
}
