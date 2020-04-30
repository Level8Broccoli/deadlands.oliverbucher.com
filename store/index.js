export const state = () => ({
  dice: [4, 6, 8, 10, 12],
  title: 'Deadlands RPG',
  tabList: [
    {
      id: 'general',
      name: 'Allgemein',
      link: '/'
    },
    {
      id: 'attributes',
      name: 'Attribute',
      link: '/attributes',
      points: 5
    },
    {
      id: 'skills',
      name: 'Fertigkeiten',
      link: '/skills',
      points: 12
    },
    {
      id: 'handicaps',
      name: 'Handicaps',
      link: '/handicaps',
      points: 4
    },
    {
      id: 'talents',
      name: 'Talente',
      link: '/talents',
      points: 3
    },
    {
      id: 'chronicle',
      name: 'Chronik',
      link: '/chronicle',
      notification: true
    }
  ]
})
