const editUrl = "https://github.com/ArthurYdalgo/ydalgo/blob/master/docs/";
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Arthur Ydalgo",
    tagline:
        "My personal page",
    url: "https://ydalgo.dev",
    baseUrl: "/",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "images/favicon.ico",
    organizationName: "ArthurYdalgo", // Usually your GitHub org/user name.
    projectName: "ydalgo", // Usually your repo name.
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "ArthurYdalgo",
            items: [
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
                routeBasePath: "/community",
                editUrl,
            },
        ],
    ],
};
