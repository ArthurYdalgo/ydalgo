const editUrl = "https://github.com/ArthurYdalgo/laravext/blob/master/docs/";
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Arthur Ydalgo",
    tagline:
        "An Inertia-styled monolith with Next.js' file-based routing system and file conventions for Vue and React",
    url: "https://laravext.dev",
    baseUrl: "/",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "images/favicon.ico",
    organizationName: "ArthurYdalgo", // Usually your GitHub org/user name.
    projectName: "laravext", // Usually your repo name.
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        metadata: [{ name: 'og:image', content: 'https://laravext.dev/images/og_image.png' }],
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "ArthurYdalgo",
            logo: {
                alt: "Laravext Logo",
                src: "images/logo.png",
            },
            items: [
                {
                    
                    position: "left",
                    to: "/projects",
                    
                    label: "Projects",
                },
                {
                    
                    position: "left",
                    to: "/resume",
                    label: "Resume",
                },
                {
                    href: "https://github.com/ArthurYdalgo/ArthurYdalgo",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Links",
                    items: [
                        {
                            label: "LinkedIn",
                            href: "https://linkedin.com/in/arthur-y",
                        },
                        {
                            label: "TopTal Profile",
                            href: "https://www.toptal.com/resume/arthur-de-aguiar-ydalgo-miranda-couto",
                        },
                        {
                            label: "GitHub",
                            href: "https://www.github.com/ArthurYdalgo/ArthurYdalgo",
                        }
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.dracula,
            additionalLanguages: ["php", "toml", 'jsx', 'json'],
        }
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                theme: {
                    customCss: ["./src/css/custom.css"],
                },
                docs: {
                    path: "docs",
                    sidebarPath: require.resolve("./sidebars/docs.js"),
                    editUrl,
                    routeBasePath: "/",
                },
                blog: {
                    path: "blog",
                    blogTitle: "Laravext Blog",
                    editUrl,
                },
                pages: {},
            },
        ],
    ],
    plugins: [
        require.resolve('docusaurus-lunr-search'),
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "community",
                path: "community",
                sidebarPath: require.resolve("./sidebars/community.js"),
                routeBasePath: "/community",
                editUrl,
            },
        ],
    ],
};
