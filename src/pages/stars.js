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

            {/* <div style={{ height: "10rem" }}></div> */}
            <ReactNebula />

            <ReactNebula config={{
                starsCount: 250,
                starsRotationSpeed: 3,
                nebulasIntensity: 8,
                sunScale: 0,
                starsCount: 400,
                starsRotationSpeed: 5,
                planetsScale: 0,
                nebulasIntensity: 0,
                bgColor: 'rgb(8,8,8)',
            }} />

            <div style={{ width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
                <span className={clsx('welwordko', styles.welwordko)}>Sailing in the cosmos</span>
                <img style={{ height: "1rem" }} alt="mmm" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/NEBULA.png" />
            </div>
            {/* <h1 className={clsx('gradiant', styles.gradiant)} style={{ fontSize: "4rem", marginBottom: "10px" }}>Nebula</h1> */}

        </header >
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
        </Layout>
    );
}
