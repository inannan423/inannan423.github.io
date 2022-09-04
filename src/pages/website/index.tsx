import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import WebsiteCard from "./_components/WebsiteCard";
import ReactTooltip from "react-tooltip";
import { websiteData } from "../../data/website";
import styles from "./website.module.css";

function CategoryNav() {
  const sidebar = {
    title: "",
    items: websiteData.map((w) => ({ title: w.name, permalink: `#${w.name}` })),
  };

  return (
    <nav className={clsx(styles.sidebar, "thin-scrollbar")}>
      <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
        {sidebar.title}
      </div>
      <ul className={clsx(styles.sidebarItemList, "clean-list")}>
        {sidebar.items.map((item) => (
          <li key={item.permalink} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CategoryList() {
  return (
    <div className={styles.category}>
      {websiteData.map((cate) => (
        <div key={cate.name}>
          <div className={styles.cateHeader}>
            <h2 id={cate.name} className="anchor">
              {cate.name}
              <a
                className="hash-link"
                href={`#${cate.name}`}
                title={cate.name}
              ></a>
            </h2>
          </div>
          <section>
            <ul className={styles.websiteList}>
              {cate.websites.map((website) => (
                <>
                  <WebsiteCard key={website.name} website={website} />
                  <ReactTooltip
                    id="website-desc-tip"
                    effect="solid"
                    place="bottom"
                    type="info"
                  />
                </>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}

export default function Websites() {
  const title = "Links";
  const description = "Frequently used links";

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <header className={styles.hero}>
          <div className="container">
            {/*  <p className={styles.heroDesc}>{description}</p> */}
            <img
              className={styles.toppic}
              src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/univ2.png"
            />
            {/* <h1 className={styles.heroTitle}>常用链接</h1> */}
          </div>
        </header>
        <div className="container margin-top--md">
          <div className="row">
            <aside className="col col--1">
              <CategoryNav />
            </aside>
            <main className="col col--11">
              <CategoryList />
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
