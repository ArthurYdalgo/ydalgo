/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
    docs: [
        {
            type: "doc",
            label: "Laravext",
            id: "laravext",
        },
        {
            type: "doc",
            label: "Before you start",
            id: "before-you-start",
        },
        {
            type: "doc",
            label: "Quick Start Installation",
            id: "quickstart",
        },
        {
            type: "doc",
            label: "Configuration",
            id: "configuration",
        },
        {
            type: "category",
            label: "Concepts",
            link: {
                type: "generated-index",
                title: "Laravext Concepts",
                description: "Learn about the important Laravext concepts!",
            },
            items: [
                "concepts/router",
                "concepts/file-conventions",
                "concepts/laravext-prop",
                "concepts/laravext-lifecycle",
            ],
        },
        {
            type: "category",
            label: "Tools",
            link: {
                type: "generated-index",
                title: "Laravext Tools",
                description: "Learn about the important Laravext tools!",
            },
            items: [
                "tools/blade-directives",
                "tools/routing",
                "tools/nexus-response",
                "tools/shared-props",
                "tools/head-component",
                "tools/link-component",
                "tools/visit",
                "tools/chrome-extension",
            ],
        },
        {
            type: "doc",
            label: "Server-Side Rendering",
            id: "server-side-rendering",
        },
        {
            type: "category",
            label: "Examples",
            link: {
                type: "generated-index",
                title: "Laravext Examples",
                description: "Check some file conventions examples!",
            },
            items: ["examples/page", "examples/middleware", "examples/layout"],
        },
        {
            type: "category",
            label: "Misc",
            link: {
                type: "generated-index",
                title: "Misc",
            },
            items: [
                {
                    type: "link",
                    label: "Contributors",
                    href: "/community/contributors",
                },
                "misc/about-this-doc",
            ],
        },
        {
            type: "category",
            label: "Links",
            link: {
                type: "generated-index",
                title: "Links",
                description: "Some interesting links",
            },
            items: [
                {
                    type: "link",
                    label: "Discord",
                    href: "https://dsc.gg/laravext",
                },
                {
                    type: "link",
                    label: "GitHub (Docs and NPM Packages)",
                    href: "https://github.com/ArthurYdalgo/laravext",
                },
                {
                    type: "link",
                    label: "GitHub (Packagist)",
                    href: "https://github.com/ArthurYdalgo/laravext-packagist",
                },
                {
                    type: "link",
                    label: "YouTube",
                    href: "https://www.youtube.com/@laravext",
                },
                {
                    type: "link",
                    label: "Packagist",
                    href: "https://packagist.org/packages/arthurydalgo/laravext",
                },
                {
                    type: "link",
                    label: "NPM @laravext/react",
                    href: "https://www.npmjs.com/package/@laravext/react",
                },
                {
                    type: "link",
                    label: "NPM @laravext/vue3",
                    href: "https://www.npmjs.com/package/@laravext/vue3",
                },
                {
                    type: "link",
                    label: "Buy me a coffee",
                    href: "https://www.buymeacoffee.com/arthurydalgo",
                },
            ],
        },
    ],
};