import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import StarMeButton from "@site/src/components/StarMeButton";
import TechStack from "../components/TechStack";
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
        {/* <div className={clsx("stars", styles.stars)}></div>
        <div className={clsx("stars2", styles.stars2)}></div>
        <div className={clsx("stars3", styles.stars3)}></div> */}
        <span className={clsx("topword", styles.topword)}>
          Flying coding jet.
        </span>
      </div>
    </header>
  );
}
function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("aPicBox", styles.aPicBox)}>
      <img
        className={clsx("aboutPic", styles.aboutPic)}
        src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/aboutmevue.png"
        alt="about"
      />
    </div>
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
          <span className={clsx("mkdownq", styles.mkdownq)}>
            让记录成为习惯
          </span>
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
            {/* <img
              className={clsx("starme", styles.starme)}
              src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/starmeme.png"
            /> */}
            <StarMeButton />
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
        {/* <div className={clsx("stars", styles.stars)}></div>
        <div className={clsx("stars2", styles.stars2)}></div>
        <div className={clsx("stars3", styles.stars3)}></div> */}
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
              {/* <img
                className={clsx("starme", styles.starme)}
                src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/starmeme.png"
              /> */}
              <StarMeButton className={clsx("newStar", styles.newStar)} />
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
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    function onScroll() {
      // navbar.classList.add("onScroll");
      if (window.scrollY === 0) {
        navbar.classList.remove("onScroll");
        navbar.classList.add("noScroll");
        // console.log("remove");
      } else {
        navbar.classList.add("onScroll");
        navbar.classList.remove("noScroll");
        // console.log("add");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Jetzihan 个人博客">
      {/* <HomepageHeader /> */}
      <meta name="baidu-site-verification" content="code-7UBxBuCkkt" />
      <main>
        {/* <Bigimg /> */}
        <img
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/colorback.png"
          alt="Bkp"
          className={clsx("BkImg", styles.BkImg)}
        />
        <img
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/10@4x.png"
          alt="Bkp"
          className={clsx("DarkBkImg", styles.DarkBkImg)}
        />
        <HomepageHeader />
        <About />
        <HomepageFeatures />
        <TechStack />

        <Slider />
        <HomePageIndex />
      </main>
    </Layout>
  );
}
