import Layout from "@theme/Layout";
import React, { useState } from "react";
import * as themes from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react";
import styles from "./coding.module.css";
export default () => {
  const [current, setCurrent] = useState("sandpackDark");
  const [Language, setLanguage] = useState("react");

  const codeBlock = `import { ${current} } from "@codesandbox/sandpack-themes";
<Sandpack theme={${current}} />;`;

  // var Language = "react";

  return (
    <Layout>
      <header className={styles.hero}>
        <img
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/sandpack.png"
          alt="Coding"
          style={{
            height: "40px",
            marginRight: "20px",
          }}
          className={styles.heroLogo}
        />
        <div className={styles.container}>
          <div className={styles.slect}>
            Theme
            <select
              style={{ marginLeft: ".5em" }}
              defaultValue="sandpackDark"
              onChange={({ target }) => setCurrent(target.value)}
            >
              {Object.keys(themes).map((themeName) => (
                <option>{themeName}</option>
              ))}
            </select>
          </div>
          <div className={styles.slect}>
            Template
            <select
              name="Template"
              style={{ marginLeft: ".5em" }}
              defaultValue="React"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>react</option>
              <option>react-ts</option>
              <option>vue</option>
              <option>vue3</option>
              <option>angular</option>
              <option>vanilla</option>
              <option>vanilla-ts</option>
            </select>
          </div>
        </div>
      </header>
      <div className={styles.sandbox}>
        <Sandpack
          options={{
            showLineNumbers: true,
            showInlineErrors: true,
            showNavigator: true,
            showTabs: true,
            closableTabs: true,
            visibleFiles: [
              "/index.js",
              "/public/index.html",
              "/styles.css",
              "/App.js",
              // "/button.js",
            ],
            showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 620, // default - 300
            editorWidthPercentage: 60, // default - 50
          }}
          // files={{
          //   "/App.js": `...`,
          //   "/button.js": `...`,
          //   "/link.js": {
          //     code: `...`,
          //     hidden: true,
          //   },
          // }}
          template={Language}
          theme={themes[current]}
        />
      </div>
    </Layout>
  );
};
