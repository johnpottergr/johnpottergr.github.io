import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/portfolio',
    component: ComponentCreator('/portfolio', 'b94'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4ea'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bab'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '22d'),
            routes: [
              {
                path: '/docs/placeholder',
                component: ComponentCreator('/docs/placeholder', '9f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
