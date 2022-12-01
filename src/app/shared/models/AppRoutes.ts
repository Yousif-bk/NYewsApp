export const AppRoutes = {
  Auth: {
    full: 'auth',
    main: 'auth',
    sub: '',
    sign: {
      full: 'sign',
      sub: '',
    },
  },

  news: {
    full: '/nyTimes',
    main: 'nyTimes',
    sub: '',
    details: {
      full: 'details',
      main: ':id',
    },
  },

  article: {
    main: 'article-search',
    sub: '',
  },
};
