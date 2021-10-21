const timeline = [
  {
    year: 1998,
    description: '<b>Inauguração</b> do primeiro centro de adoção permanente'
  },
  {
    year: 1999,
    description: '<b>Expansão</b> do projeto de centro de adoção'
  },
  {
    year: 2010,
    description: 'Lojas Cobasi começam a receber <b>eventos de adoção</b>'
  },
  {
    year: 2015,
    description: '<b>Primeiro Mega evento de adoção</b> em uma Cobasi'
  },
  {
    year: 2016,
    description: 'Primeiro aniversário da Cobasi onde foram doadas <b>15 toneladas de ração.</b>'
  },
  {
    year: 2017,
    description: 'Campanha de aniversário da Cobasi doou <b>32 toneladas de ração a ONGs.</b>'
  },
  {
    year: 2018,
    description: 'Campanha de aniversário da Cobasi doou <b>70 toneladas de ração a ONGs e protetores da causa animal.</b>'
  },
  {
    year: 2019,
    description: 'Realizamos <b>parcerias com mais de 50 ONGs</b> para a realização de <b>eventos de adoção.</b>'
  },
  {
    year: 2020,
    description: 'Campanha de aniversário da Cobasi doou <b>100 toneladas de ração a ONGs e protetores.</b>'
  },
  {
    year: 2020,
    description: 'Campanha de aniversário da Cobasi doou <b>130 toneladas de ração a ONGs e protetores.</b>'
  },
  {
    year: 2021,
    description: 'Com o tema Vida Traz Vida e Ração traz Doação, a campanha de aniversário que <b>ajudará 90 ONGs/protetores a conseguirem rações aos animais.</b>'
  }
]

export const timelines = [
  {
    data: timeline.slice(0, 5),
    activeItems: (value: number) => !(value % 2),
    noBorderLeftRadius: 0
  },
  {
    data: timeline.slice(5, timeline.length),
    activeItems: (value: number) => Boolean(value % 2),
    noBorderRightRadius: 5
  }
]

export const mobileTimelines = [
  {
    data: timeline.slice(0, 3),
    activeItems: (value: number) => !(value % 2),
    noBorderLeftRadius: 0
  },
  {
    data: timeline.slice(3, 6),
    activeItems: (value: number) => !(value % 2),
    noBorderRightRadius: 3
  },
  {
    data: timeline.slice(6, 9),
    activeItems: (value: number) => !(value % 2),
    noBorderRightRadius: 6
  },
  {
    data: timeline.slice(9, timeline.length),
    activeItems: (value: number) => Boolean(value % 2),
    noBorderRightRadius: 1
  }
]

export default timeline