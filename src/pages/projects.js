import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ReactNebula } from "@flodlc/nebula";
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('heroMax', styles.heroMax)}>
            <div className={clsx('TXT', styles.TXT)}>
                <h1>svg board
                </h1>
            </div>
            <div className={clsx('TXT1', styles.TXT1)}>
                Draw something with it !
            </div>
            <div className={clsx('TXT2', styles.TXT2)}>
                Build with Vue.js. <a href='https://github.com/inannan423/Svg_Board' target={'_blank'}>Github Repository</a>
            </div>
            <div className={clsx('TXT3', styles.TXT3)}>
                <div className={clsx('TXT4', styles.TXT4)}>
                    Let's Go!
                </div>
            </div>

            <div className={clsx('hero1', styles.hero1)}>
                <img className={clsx('firstpic', styles.firstpic)} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220727163907.png" alt="bigmax" />
            </div>

        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                {/* <HomepageFeatures /> */}
            </main>

        </Layout>
    );
}
