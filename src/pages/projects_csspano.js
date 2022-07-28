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
            <div className={clsx('circlePro', styles.circlePro)}>

            </div>
            <div className={clsx('csspano', styles.csspano)}>
                <h1 >css panorama
                </h1>
            </div>
            <div className={clsx('TXT1', styles.TXT1)}>
                Magical panoramic magic !
            </div>
            <div className={clsx('TXT2', styles.TXT2)}>
                2022.7.15 Build with Vue.js and three.js. <a href='https://github.com/inannan423/csspano' target={'_blank'}>Github Repository</a>
            </div>
            <div className={clsx('TXT3', styles.TXT3)}>
                <a target={'_blank'} href="https://csspano.netlify.app/"><div className={clsx('TXT4', styles.TXT4)}>
                    Let's Go!
                </div></a>
            </div>

            <div className={clsx('hero1', styles.hero1)}>
                <img className={clsx('firstpic', styles.firstpic)} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220728083938.png" alt="bigmax" />
            </div>
            <div className={clsx('TXT5', styles.TXT5)}>
                鼠标掌舵浏览全景图。
            </div>
            <div className={clsx('hero1', styles.hero1)}>
                <img className={clsx('firstpic', styles.firstpic)} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220728084106.png" alt="bigmax" />
            </div>
            <div className={clsx('TXT5', styles.TXT5)}>
                多维场景供你选择。
            </div>
            <div className={clsx('hero1', styles.hero1)}>
                <img className={clsx('firstpic', styles.firstpic)} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220728084148.png" alt="bigmax" />
            </div>
            <div className={clsx('TXT5', styles.TXT5)}>
                上传图片实时渲染。
            </div>
            <div className={clsx('TXT6', styles.TXT6)}>
                Do you like it ? <br />
                Star me on GitHub!
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
