import {
  DefaultPage,
  Table,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: '/table', name: 'Table', component: Table },
  ],
};
