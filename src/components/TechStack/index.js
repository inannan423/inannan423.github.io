import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const TechList = [
  {
    title: "Docusaurus",
    des: "站点构建",
    techLogo:
      "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/iconify-logos_docusaurus.png",
    description: "Docusaurus是基于React.js的静态网站构建器",
    backcolor: "linear-gradient(to top, #1effbf 0%, #cdf16a 100%)",
  },
  {
    title: "Web基础",
    des: "前端开发",
    techLogo:
      "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/htmllogo1.png",
    description: "前端开发基础 JavaScript,HTML,css",
    backcolor: "linear-gradient(to top, #ff831e 0%, #eab82f 100%)",
  },
  {
    title: "Node.js",
    des: "前后端交互",
    techLogo:
      "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/nodejsLogo1.png",
    description: "Node.js是 JavaScript 运行时环境",
    backcolor: "linear-gradient(to top, #0fff4b 0%, #039e56 100%)",
  },
  {
    title: "微信小程序",
    des: "前端开发",
    techLogo:
      "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/minipro.png",
    description: "微信小程序是基于微信环境的移动应用",
    backcolor: "linear-gradient(to top, #1e96ff 0%, #063bb6 100%)",
  },
];

function Techs({ title, description, des, techLogo, backcolor }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className={clsx("col col--3")}
    >
      <div
        className={styles.card}
        style={{
          background: backcolor,
        }}
      >
        {/* <div className={styles.cardlogo}>
            <img src={techLogo} alt="cardLogo" />
      </div> */}
        <div className={styles.cardinfo}>
          <img src={techLogo} className={styles.cardlogo} alt="cardLogo" />
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{des}</p>
        </div>
        <div className={styles.cardbio}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className={styles.Techss}>
      <div className="container">
        <div className="row">
          {TechList.map((props, idx) => (
            <Techs key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
