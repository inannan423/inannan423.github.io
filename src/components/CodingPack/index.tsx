// 导入 React
import React, { useState } from "react";
// 导入 sandpack
import { Sandpack } from "@codesandbox/sandpack-react";
import * as themes from "@codesandbox/sandpack-themes";
// import styles from "./coding.module.css";

const CodingPack: React.FC<{
  File?: string;
  Temp?: undefined;
  AppCode?: string;
  CodeIndex?: string;
  AppHidden?: boolean;
  CodeJs?: string;
  CodeCss?: string;
  JsHidden?: boolean;
  CssHidden?: boolean;
  HtmlHidden?: boolean;
  AppHiddenVue?: boolean;
  showNav?: boolean;
  showSelect?: boolean;
}> = (props) => {
  // 设定 File 默认值
  const {
    CodeIndex = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
       <h1>Hello World</h1>
    </body>
    </html>`,
    CodeJs = `import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);`,
    CodeCss = `body{background-color: #000;}`,
    AppCode = `console.log("Hello World")`,
    AppHidden = false,
    JsHidden = false,
    CssHidden = true,
    HtmlHidden = true,
    AppHiddenVue = true,
    showNav = true,
    showSelect = true,
  } = props;
  // 设定 Temp 默认值
  const { Temp = "react" } = props;

  const [current, setCurrent] = useState("nightOwl");

  return (
    <>
      <div>
        <Sandpack
          options={{
            showLineNumbers: true,
            showInlineErrors: true,
            showNavigator: showNav,
            showTabs: showSelect,
            closableTabs: true,
            wrapContent: true, // default - false
            editorHeight: 320, // default - 300
            editorWidthPercentage: 60, // default - 50
          }}
          files={{
            // "/App.js": {
            //   code: AppCode,
            //   hidden: AppHidden,
            // },
            "/App.vue": {
              code: AppCode,
              hidden: AppHiddenVue,
            },
            "/index.js": {
              code: CodeJs,
              hidden: JsHidden,
            },
            "/index.html": {
              code: CodeIndex,
              hidden: HtmlHidden,
            },
            "/index.css": {
              code: CodeCss,
              hidden: CssHidden,
            },
          }}
          template={Temp}
          theme={themes[current]}
        />
      </div>
    </>
  );
};

export { CodingPack };
