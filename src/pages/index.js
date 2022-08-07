import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Slider from "@site/src/components/Slider";
import { ReactNebula } from "@flodlc/nebula";
import styles from "./index.module.css";
// import Slider from "react-slick";
//在头部引入css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// 新首页

function HomePageIndex() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner1)}>
      <div className={clsx("toppage", styles.toppage)}>
        <div className={clsx("circleTop", styles.circleTop)}></div>
        <div className={clsx("circleTop1", styles.circleTop1)}></div>
        <div className={clsx("circleBottom", styles.circleBottom)}></div>
        <div className={clsx("circleBottom1", styles.circleBottom1)}></div>
        {/* <div className={clsx("circles", styles.circles)}></div> */}
        <div className={clsx("stars", styles.stars)}></div>
        <div className={clsx("stars2", styles.stars2)}></div>
        <div className={clsx("stars3", styles.stars3)}></div>
        <span className={clsx("topword", styles.topword)}>
          Flying coding jet.
        </span>
      </div>
    </header>
  );
}
function Bigimg() {
  return (
    // <div className={clsx("BigimgBox", styles.BigimgBox)}>
    // <img className={clsx("Bigimg", styles.Bigimg)} src="img/sidepic.png" />
    // </div>
    <div className={clsx("mainpage", styles.mainpage)}>
      <div className={clsx("bigmax", styles.bigmax)}>
        <div className={clsx("circleTopee", styles.circleTopee)}></div>
        <div className={clsx("leftside", styles.leftside)}>
          <span className={clsx("mkdown", styles.mkdown)}>Mark sth. down</span>
          <span className={clsx("mkdownq", styles.mkdownq)}>让记录成为习惯</span>
          <br />
          <br />
          <span className={clsx("welword1", styles.welword1)}>
            Hello, welcome to coding jet, this is where I record my learning and
            I aspire to be a front-end magician.
          </span>
          <a
            href="https://github.com/inannan423/inannan423.github.io"
            target={"_blank"}
          >
            <img
              className={clsx("starme", styles.starme)}
              src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/starmeme.png"
            />
          </a>
        </div>
        <div className={clsx("sidepic", styles.sidepic)}>
          <img className={clsx("side", styles.side)} src="img/sidepic.png" />
        </div>
      </div>
    </div>
  );
}

// 原首页
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("mainpage", styles.mainpage)}>
        <div className={clsx("stars", styles.stars)}></div>
        <div className={clsx("stars2", styles.stars2)}></div>
        <div className={clsx("stars3", styles.stars3)}></div>
        <div className={clsx("bigmax", styles.bigmax)}>
          <div className={clsx("leftside", styles.leftside)}>
            <span className={clsx("welword", styles.welword)}>
              Flying code jet.
            </span>
            <br />
            <span className={clsx("welword1", styles.welword1)}>
              Hello, welcome to coding jet, this is where I record my learning
              and I aspire to be a front-end magician.
            </span>
            <a
              href="https://github.com/inannan423/inannan423.github.io"
              target={"_blank"}
            >
              <img
                className={clsx("starme", styles.starme)}
                src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/starmeme.png"
              />
            </a>
            <div className={clsx("circle", styles.circle)}></div>
            <div className={clsx("circles", styles.circles)}></div>
          </div>
          <div className={clsx("sidepic", styles.sidepic)}>
            <img className={clsx("side", styles.side)} src="img/sidepic.png" />
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
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      

      <main>
        {/* <Bigimg /> */}
        <HomepageHeader/>
        <HomepageFeatures />
        <Slider />
        <HomePageIndex />
      </main>


    </Layout>
  );
}
