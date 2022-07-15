import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('mainpage', styles.mainpage)} >
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}

        <div className={clsx('bigmax', styles.bigmax)}>
          <div className={clsx('leftside', styles.leftside)}>
            <span className={clsx('welword', styles.welword)}>Flying code jet.</span><br />
            <span className={clsx('welword1', styles.welword1)}>Hello, welcome to coding jet, this is where I record my learning and I aspire to be a front-end magician.</span>
            <div className={clsx('circle', styles.circle)}>
            </div>
          </div>
          <div className={clsx('sidepic', styles.sidepic)}>
            <img className={clsx('side', styles.side)} src="img/sidepic.png" />
          </div>
        </div>
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
