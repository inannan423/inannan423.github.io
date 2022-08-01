import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ReactNebula } from "@flodlc/nebula";
import styles from './index.module.css';
import Slider from "react-slick";
//在头部引入css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    const settings = {
        dots: true,//是否显示小圆点索引
        autoplay: true,//是否自动播放
        infinite: true,//是否无限循环
        autoplaySpeed: 2000,//自动播放的时间
        fade: true,//是否采用淡入淡出的效果
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='swiper-content'>
            <h2> Single Item</h2>
            <Slider {...settings} className="swiper-container">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Slider>
        </div>
    )
}


// 新首页

function HomePageIndex() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('mainpage', styles.mainpage)} >
        {/* <div className={clsx('gcontainer', styles.gcontainer)}>
          <p className={clsx('wavetext', styles.wavetext)}>TEXT WAVE</p>
        </div> */}

      </div>
    </header>
  );
}

// 原首页
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* // With custom config */}
      {/* <ReactNebula className={clsx('ministar', styles.ministar)} config={{
               starsCount: 250,
               starsRotationSpeed: 3,
               nebulasIntensity: 8,
        }}/> */}
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

        <div className={clsx('stars', styles.stars)}></div>
        <div className={clsx('stars2', styles.stars2)}></div>
        <div className={clsx('stars3', styles.stars3)}></div>
        <div className={clsx('bigmax', styles.bigmax)}>
          <div className={clsx('leftside', styles.leftside)}>
            <span className={clsx('welword', styles.welword)}>Flying code jet.</span><br />
            <span className={clsx('welword1', styles.welword1)}>Hello, welcome to coding jet, this is where I record my learning and I aspire to be a front-end magician.</span>
            <a href='https://github.com/inannan423/inannan423.github.io' target={'_blank'}><img className={clsx('starme', styles.starme)} src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/starmeme.png" />
            </a>
            <div className={clsx('circle', styles.circle)}>
            </div>
            <div className={clsx('circles', styles.circles)}>
            </div>
          </div>
          <div className={clsx('sidepic', styles.sidepic)}>
            <img className={clsx('side', styles.side)} src="img/sidepic.png" />
          </div>
        </div>
        {/* <SimpleSlider/> */}
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
      {/* <HomePageIndex /> */}
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
