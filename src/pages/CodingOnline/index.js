// import React from "react";
// import clsx from "clsx";
// import Link from "@docusaurus/Link";
// import { Sandpack } from "@codesandbox/sandpack-react";
// import { sandpackDark } from "@codesandbox/sandpack-themes";
// import Layout from "@theme/Layout";

// const code = `export default function App() {
//   return <h1>Hello Sandpack</h1>
// }`;

// export default function CodingOnline() {
//   return (
//     <Layout>
//       <Sandpack
//         template="react"
//         theme={sandpackDark}
//         files={{
//           "/App.js": code,
//         }}
//       />
//     </Layout>
//   );
// }
import Layout from "@theme/Layout";
import React, { useState } from "react";
import * as themes from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react";
import styles from "./coding.module.css";
export default () => {
  const [current, setCurrent] = useState("sandpackDark");

  const codeBlock = `import { ${current} } from "@codesandbox/sandpack-themes";
<Sandpack theme={${current}} />;`;

  return (
    <Layout>
      <header className={styles.hero}>
        <div className="container">
          <label>
            Coding Online
            <br /> Theme:
            <select
              style={{ marginLeft: ".5em" }}
              defaultValue="sandpackDark"
              onChange={({ target }) => setCurrent(target.value)}
            >
              {Object.keys(themes).map((themeName) => (
                <option>{themeName}</option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <Sandpack
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
          showNavigator: true,
          showTabs: true,
          closableTabs: true,
          visibleFiles: [
            "/App.js",
            "/index.js",
            "/public/index.html",
            "/styles.css",
          ],
          size: 70,
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 600, // default - 300
          editorWidthPercentage: 50, // default - 50
        }}
        template="react"
        theme={themes[current]}
      />
    </Layout>
  );
};
