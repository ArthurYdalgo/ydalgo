import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Link from "@docusaurus/Link";

const Hero = () => {
    const { siteConfig } = useDocusaurusContext();
    const { isDarkTheme } = useColorMode();

    return (
        <div className={clsx("hero shadow--lw", styles.heroHeader)}>
            <section className={styles.header}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            </section>
            <section className={clsx("hero__subtitle", styles.heroSubtitle)}>
                I'm a web developer specialized in Laravel, and I'm also the creator of <a href="https://laravext.dev" target="_blank">Laravext</a>.
            </section>
            <section className={styles.callToActions}>
                <Link
                    className="button button--lg button--outline button--primary margin--lg"
                    to="/resume"
                >
                    My Resume
                </Link>
            </section>
        </div>
    );
};

const FEATURES = [
    {
        header: "Monolithic",
        body: "Laravext sits inside your Laravel application, so no worries about setting up a separate project for your frontend.",
        to: "/docs/quickstart",
    },
    {
        header: "File-based Routing System",
        body: "Laravext creates a file-based routing system just like you do with Next.js, and also uses (most of) the same file conventions.",
        to: "/docs/concepts/router",
    },
    {
        header: "Server-Side Rendering",
        body: "Make your application SEO-friendly by using server-side rendering of your pages.",
        to: "/docs/server-side-rendering",
    },
];

function Feature(props: { feature: (typeof FEATURES)[number] }) {
    return (
        <div className="card-demo">
            <div className="card">
                <div className="card__header">
                    <h3>{props.feature.header}</h3>
                </div>
                <div className="card__body">
                    <p>{props.feature.body}</p>
                </div>
                <div className="card__footer">
                    <Link
                        className="button button--secondary"
                        to={props.feature.to}
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Features() {
    return (
        <article className={clsx("padding--lg", styles.features)}>
            <h2>Features</h2>
            <section className={styles.featuresGrid}>
                {FEATURES.map((it) => (
                    <Feature feature={it} />
                ))}
            </section>
        </article>
    );
}

export default function Index() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description={siteConfig.tagline}>
            <Hero />
            {/* <Features /> */}
        </Layout>
    );
}
