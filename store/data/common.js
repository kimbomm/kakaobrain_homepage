const menus = [
  {
    name: 'About',
    category: 'about',
    nick: 'About',
    link: '/about',
    alarm: '',
    sub: [
      {
        category: 'introduce',
        nick: 'Introduce',
        name: 'Unthinkable Question',
        link: '/about'
      },
      {
        category: 'culture',
        nick: 'Culture',
        name: 'Culture',
        link: '/about/culture'
      },
      {
        category: 'principle',
        nick: 'Principle',
        name: 'Principle',
        link: '/about/principle'
      }
    ]
  },
  {
    name: 'Research',
    category: 'research',
    nick: 'Research',
    link: '/research',
    alarm: '172',
    sub: [
      {
        category: 'challenge',
        nick: 'Challenge',
        name: 'Challenge',
        link: '/contents/research/challenge'
      },
      {
        category: 'publications',
        nick: 'Publications',
        name: 'Publications',
        link: '/contents/research/publications'
      },
      {
        category: 'collaborative',
        nick: 'Collabo',
        name: 'Collaborative Research',
        link: '/contents/research/collaborative'
      }
    ]
  },
  {
    name: 'Tech',
    category: 'tech',
    nick: 'Tech',
    link: '/tech',
    alarm: '54',
    sub: [
      {
        category: 'highlight',
        nick: 'Highlight',
        name: 'Highlight',
        link: '/contents/tech/highlight'
      },
      {
        category: 'dataset',
        nick: 'Datasets',
        name: 'Datasets',
        link: '/contents/tech/dataset'
      },
      {
        category: 'brain',
        nick: 'Brain Cloud',
        name: 'Brain Cloud',
        link: '/contents/tech/brain'
      },
      {
        category: 'large',
        nick: 'Large Scale',
        name: 'Large Scale',
        link: '/contents/tech/large'
      },
      {
        category: 'digital',
        nick: 'Digital Human',
        name: 'Digital Human',
        link: '/contents/tech/digital'
      }
    ]
  },
  {
    name: 'Docu.B',
    category: 'document',
    nick: 'Docu.B',
    link: '/document',
    alarm: '78',
    sub: [
      {
        category: 'news',
        nick: 'News',
        name: 'News',
        link: '/contents/document/news'
      },
      {
        category: 'documentary',
        nick: 'Documentary',
        name: 'Documentary',
        link: '/contents/document/documentary'
      }
    ]
  }
]
const footer = [
  {
    name: {
      KR: '문의',
      EN: 'Contacts'
    },
    link: 'mailto:contact@kakaobrain.com',
    target: '_blank'
  },
  {
    name: {
      KR: '오시는 길',
      EN: 'Maps & Directions'
    },
    link: '/map',
    target: ''
  },
  {
    name: {
      KR: '사이버윤리실',
      EN: 'Cyber Ethics'
    },
    link: '/ethics',
    target: ''
  },
  {
    name: {
      KR: '개인정보처리방침',
      EN: 'Privacy Policy'
    },
    link: '/privacy',
    target: ''
  },
  // {
  //   name: {
  //     KR: 'Pathfinder',
  //     EN: 'Pathfinder'
  //   },
  //   link: '#',
  //   target: '_blank'
  // },
  {
    name: {
      KR: '오픈미니컨',
      EN: 'Open Minicon'
    },
    link: 'https://kakaobrain.com/openminicon',
    target: '_blank'
  },
  {
    name: {
      KR: '영입',
      EN: 'Careers'
    },
    link: 'https://kakaobrain.recruiter.co.kr/appsite/company/index',
    target: '_blank'
  }
]
const sns = [
  { name: 'facebook', link: 'https://www.facebook.com/kakaobrain' },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/kakaobrain/'
  },
  // { name: 'kakao', link: 'http://pf.kakao.com/_xhFyTb' },
  { name: 'github', link: 'https://github.com/kakaobrain' },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCdfmJNL-t_PdVHyn__tGrpg'
  }
]

export default {
  menus,
  footer,
  sns
}
