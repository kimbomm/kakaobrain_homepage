const menus = [
  {
    name: 'About',
    category: 'about',
    nick: 'About',
    link: '/about',
    sub: [
      {
        category: 'introduce',
        nick: 'Introduce',
        name: 'Unthinkable Question',
        link: '/about',
        target: ''
      },
      {
        category: 'culture',
        nick: 'Culture',
        name: 'Culture',
        link: '/about/culture',
        target: ''
      },
      {
        category: 'career',
        nick: 'Careers',
        name: 'Careers',
        link: 'https://recruit.kakaobrain.com/',
        target: '_blank'
      }
    ]
  },
  {
    name: 'Research',
    category: 'research',
    nick: 'Research',
    link: '/research',
    sub: [
      {
        category: 'challenge',
        nick: 'Challenge',
        name: 'Challenge',
        link: '/contents/research/challenge',
        target: ''
      },
      {
        category: 'publications',
        nick: 'Publications',
        name: 'Publications',
        link: '/contents/research/publications',
        target: ''
      },
      {
        category: 'collaborative',
        nick: 'Collabo',
        name: 'Collaborative Research',
        link: '/contents/research/collaborative',
        target: ''
      }
    ]
  },
  {
    name: 'Tech',
    category: 'tech',
    nick: 'Tech',
    link: '/tech',
    sub: [
      // {
      //   category: 'highlight',
      //   nick: 'Highlight',
      //   name: 'Highlight',
      //   link: '/contents/tech/highlight'
      // },
      {
        category: 'dataset',
        nick: 'Datasets',
        name: 'Datasets',
        link: '/contents/tech/datasets',
        target: ''
      },
      {
        category: 'brain',
        nick: 'Brain Cloud',
        name: 'Brain Cloud',
        link: '/contents/tech/brain_cloud',
        target: ''
      },
      {
        category: 'large',
        nick: 'Large Scale AI',
        name: 'Large Scale AI',
        link: '/contents/tech/large_scale',
        target: ''
      },
      {
        category: 'digital',
        nick: 'Digital Human',
        name: 'Digital Human',
        link: '/contents/tech/digital_human',
        target: ''
      }
    ]
  },
  {
    name: 'Docu.B',
    category: 'document',
    nick: 'Docu.B',
    link: '/document',
    sub: [
      {
        category: 'news',
        nick: 'News',
        name: 'News',
        link: '/contents/document/news',
        target: ''
      },
      {
        category: 'documentary',
        nick: 'Documentary',
        name: 'Documentary',
        link: '/contents/document/documentary',
        target: ''
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
    link: 'https://openminicon.kakaobrain.com',
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
