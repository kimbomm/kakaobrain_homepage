const menus = [
  {
    name: 'About',
    category: 'about',
    nick: 'About',
    link: '',
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
    ]
  },
  {
    name: 'Carrers',
    category: 'carrers',
    nick: 'Carrers',
    link: 'https://careers.kakaobrain.com/',
  },
  {
    name: 'Product',
    category: 'product',
    nick: 'product',
    link: '',
    sub: [
      {
        //임시설정
        category: 'llms',
        nick: 'LLMs',
        name: 'LLms',
        link: '/LLms',
        target: ''
      },
      {
        category: 'karlo',
        nick: 'Karlo',
        name: 'Karlo',
        link: 'https://karlo.ai/',
        target: '_blank'
      },
      {
        category: 'healthcare',
        nick: 'Healthcare',
        name: 'Healthcare',
        link: '/b/healthcare',
        target: ''
      },
      {
        category: 'brain cloud',
        nick: 'Brain Cloud',
        name: 'Brain Cloud',
        link: 'https://cloud.kakaobrain.com/',
        target: '_blank'
      }
    ]
  },
  {
    name: 'Research',
    category: 'research',
    nick: 'Research',
    link: '',
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
    name: 'News',
    category: 'news',
    nick: 'News',
    link: '/contents/document/news',
    // sub: [
    //   {
    //     category: 'news',
    //     nick: 'News',
    //     name: 'News',
    //     link: '/contents/document/news',
    //     target: ''
    //   },
    // ]
  },
   {
    name: 'Log B',
    category: 'log_b',
    nick: 'Log B',
    link: '/log_b',
    sub: [
      {
        category: 'home',
        nick: 'Home',
        name: 'Home',
        link: '/contents/log_b',
        target: ''
      },
      {
        category: 'talk',
        nick: 'Talk',
        name: 'Talk',
        link: '/contents/log_b/talk',
        target: ''
      },
      {
        category: 'conference',
        nick: 'Conference',
        name: 'Conference',
        link: '/contents/log_b/conference',
        target: ''
      },
      {
        category: 'v_log',
        nick: 'VLog',
        name: 'VLog',
        link: '/contents/log_b/v_log',
        target: ''
      }
    ]
  },
  {
    name: 'Docu.B',
    category: 'document',
    nick: 'Docu.B',
    link: '',
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
  },
    {
    name: 'B^',
    category: 'b',
    nick: 'B^',
    link: '',
    sub: [
      {
        category: 'discover',
        nick: 'DISCOVER',
        name: 'DISCOVER',
        link: 'https://bdiscover.kakaobrain.com/',
        target: '_blank'
      },
      {
        category: 'healthcare',
        nick: 'HEALTHCARE',
        name: 'HEALTHCARE',
        link: '/b/healthcare',
        target: ''
      },
      {
        category: 'edit',
        nick: 'EDIT',
        name: 'EDIT',
        link: 'https://bedit.kakaobrain.com',
        target: '_blank'
      }
    ]
  },
    {
    name: 'Tech',
    category: 'tech',
    nick: 'Tech',
    link: '',
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
  // {
  //   name: {
  //     KR: '오픈미니컨',
  //     EN: 'Open Minicon'
  //   },
  //   link: 'https://openminicon.kakaobrain.com',
  //   target: '_blank'
  // },
  {
    name: {
      KR: '영입',
      EN: 'Careers'
    },
    link: 'https://careers.kakaobrain.com/',
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
