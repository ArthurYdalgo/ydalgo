import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '8ba'),
    routes: [
      {
        path: '/community',
        component: ComponentCreator('/community', 'aea'),
        routes: [
          {
            path: '/community',
            component: ComponentCreator('/community', '980'),
            routes: [
              {
                path: '/community/contributors',
                component: ComponentCreator('/community/contributors', '58d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/community/projects-made-with-laravext',
                component: ComponentCreator('/community/projects-made-with-laravext', 'fb1'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e53'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a24'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f9e'),
            routes: [
              {
                path: '/projects',
                component: ComponentCreator('/projects', 'b0e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/resume',
                component: ComponentCreator('/resume', '1a3'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
