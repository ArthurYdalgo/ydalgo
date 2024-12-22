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
    path: '/blog',
    component: ComponentCreator('/blog', 'cd6'),
    exact: true
  },
  {
    path: '/blog/2024/08/20/laravext-release',
    component: ComponentCreator('/blog/2024/08/20/laravext-release', '5b9'),
    exact: true
  },
  {
    path: '/blog/2024/08/23/chrome-debug-tool-release',
    component: ComponentCreator('/blog/2024/08/23/chrome-debug-tool-release', '4b7'),
    exact: true
  },
  {
    path: '/blog/2024/10/25/docs-updated-to-docusaurus',
    component: ComponentCreator('/blog/2024/10/25/docs-updated-to-docusaurus', '800'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '54c'),
    routes: [
      {
        path: '/community',
        component: ComponentCreator('/community', 'aa1'),
        routes: [
          {
            path: '/community',
            component: ComponentCreator('/community', '0ab'),
            routes: [
              {
                path: '/community/contributors',
                component: ComponentCreator('/community/contributors', 'cc1'),
                exact: true,
                sidebar: "community"
              },
              {
                path: '/community/projects-made-with-laravext',
                component: ComponentCreator('/community/projects-made-with-laravext', '10d'),
                exact: true,
                sidebar: "community"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0e2'),
    routes: [
      {
        path: '/docs/latest',
        component: ComponentCreator('/docs/latest', 'b8c'),
        routes: [
          {
            path: '/docs/latest',
            component: ComponentCreator('/docs/latest', '275'),
            routes: [
              {
                path: '/docs/latest/before-you-start',
                component: ComponentCreator('/docs/latest/before-you-start', 'cf4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/category/concepts',
                component: ComponentCreator('/docs/latest/category/concepts', '87a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/category/examples',
                component: ComponentCreator('/docs/latest/category/examples', '767'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/category/links',
                component: ComponentCreator('/docs/latest/category/links', '1ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/category/misc',
                component: ComponentCreator('/docs/latest/category/misc', '13d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/category/tools',
                component: ComponentCreator('/docs/latest/category/tools', '35e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/concepts/file-conventions',
                component: ComponentCreator('/docs/latest/concepts/file-conventions', '04c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/concepts/laravext-lifecycle',
                component: ComponentCreator('/docs/latest/concepts/laravext-lifecycle', '89c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/concepts/laravext-prop',
                component: ComponentCreator('/docs/latest/concepts/laravext-prop', 'ffa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/concepts/router',
                component: ComponentCreator('/docs/latest/concepts/router', 'ab9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/configuration',
                component: ComponentCreator('/docs/latest/configuration', 'c83'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/examples/layout',
                component: ComponentCreator('/docs/latest/examples/layout', 'c63'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/examples/middleware',
                component: ComponentCreator('/docs/latest/examples/middleware', 'af4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/examples/page',
                component: ComponentCreator('/docs/latest/examples/page', '1d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/laravext',
                component: ComponentCreator('/docs/latest/laravext', '647'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/misc/about-this-doc',
                component: ComponentCreator('/docs/latest/misc/about-this-doc', '697'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/quickstart',
                component: ComponentCreator('/docs/latest/quickstart', '557'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/server-side-rendering',
                component: ComponentCreator('/docs/latest/server-side-rendering', '223'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/blade-directives',
                component: ComponentCreator('/docs/latest/tools/blade-directives', '2c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/chrome-extension',
                component: ComponentCreator('/docs/latest/tools/chrome-extension', '653'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/head-component',
                component: ComponentCreator('/docs/latest/tools/head-component', 'ad4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/link-component',
                component: ComponentCreator('/docs/latest/tools/link-component', 'edd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/nexus-response',
                component: ComponentCreator('/docs/latest/tools/nexus-response', 'cf3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/routing',
                component: ComponentCreator('/docs/latest/tools/routing', '93a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/shared-props',
                component: ComponentCreator('/docs/latest/tools/shared-props', '6ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/latest/tools/visit',
                component: ComponentCreator('/docs/latest/tools/visit', '134'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '184'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b20'),
            routes: [
              {
                path: '/docs/before-you-start',
                component: ComponentCreator('/docs/before-you-start', '932'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/category/concepts',
                component: ComponentCreator('/docs/category/concepts', 'cd6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/category/examples',
                component: ComponentCreator('/docs/category/examples', 'e34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/category/links',
                component: ComponentCreator('/docs/category/links', 'b98'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/category/misc',
                component: ComponentCreator('/docs/category/misc', '123'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/category/tools',
                component: ComponentCreator('/docs/category/tools', '5a0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/file-conventions',
                component: ComponentCreator('/docs/concepts/file-conventions', '38b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/laravext-lifecycle',
                component: ComponentCreator('/docs/concepts/laravext-lifecycle', 'e11'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/laravext-prop',
                component: ComponentCreator('/docs/concepts/laravext-prop', 'af3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/router',
                component: ComponentCreator('/docs/concepts/router', 'aeb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/configuration',
                component: ComponentCreator('/docs/configuration', '3c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/examples/layout',
                component: ComponentCreator('/docs/examples/layout', '91f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/examples/middleware',
                component: ComponentCreator('/docs/examples/middleware', '661'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/examples/page',
                component: ComponentCreator('/docs/examples/page', 'e06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/laravext',
                component: ComponentCreator('/docs/laravext', 'f13'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/misc/about-this-doc',
                component: ComponentCreator('/docs/misc/about-this-doc', 'f3c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', 'bfe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/server-side-rendering',
                component: ComponentCreator('/docs/server-side-rendering', '128'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/blade-directives',
                component: ComponentCreator('/docs/tools/blade-directives', '38a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/chrome-extension',
                component: ComponentCreator('/docs/tools/chrome-extension', '67a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/head-component',
                component: ComponentCreator('/docs/tools/head-component', '576'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/link-component',
                component: ComponentCreator('/docs/tools/link-component', '5c1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/nexus-response',
                component: ComponentCreator('/docs/tools/nexus-response', '46a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/routing',
                component: ComponentCreator('/docs/tools/routing', 'fe0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/shared-props',
                component: ComponentCreator('/docs/tools/shared-props', '037'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools/visit',
                component: ComponentCreator('/docs/tools/visit', '20e'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
