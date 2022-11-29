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
    full: '/news',
    main: 'news',
    sub: '',
    details: {
      full: 'details',
      main: ':id',
    },
  },
};
