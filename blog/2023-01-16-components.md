---
slug: componentsLibrary
title: 创建一个属于自己的组件库
authors: Chengzihan
tags: [React,TypeScript]
---

![1](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/td-head-img.png)

## 考虑的问题

- 代码结构
- 样式解决方案
- 组件需求分析和编码
- 组件测试用例分析和编码
- 代码打包输出和发布
- CI/CD，文档生成等

## 项目创建

创建 React 项目：  

```bash
npx create-react-app triangle-design typescript
```

添加 ESLint

```bash
yarn add eslint -D
yarn eslint --init
```

## 样式系统

### inline css

举例：  

```jsx
<div style={{ color: 'red' }}>Hello</div>
```

### css in js

#### styled-components

styled-components 是一个用于 React 的 CSS-in-JS 库，它可以让你在组件中使用样式，而不用担心样式污染。  

```jsx
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

ReactDOM.render(
  <Title>Hello World!</Title>,
  document.getElementById('root')
)
```

#### emotion

Emotion 是一个用于 CSS-in-JS 的库，它可以让你在组件中使用样式，而不用担心样式污染。  

```jsx
import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

ReactDOM.render(
  <Title>Hello World!</Title>,
  document.getElementById('root')
)
```

### Sass/Less

#### Sass

Sass 是一种 CSS 预处理器，它可以让你使用变量、嵌套规则、混合（mixin）等高级功能来简化 CSS 的编写。  

```jsx
// style.scss
$color: red;

body {
  color: $color;
}
```

```jsx
// index.js

import './style.scss'
```

#### Less

Less 是一种 CSS 预处理器，它可以让你使用变量、嵌套规则、混合（mixin）等高级功能来简化 CSS 的编写。  

```jsx
// style.less

@color: red;

body {
  color: @color;
}
```

```jsx
// index.js

import './style.less'
```

### tailwindcss

Tailwind 是一个用于 CSS 的工具类库。  

```jsx
// index.js

import './style.css'
```

```jsx
// style.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

同时也可以直接在组件中使用 tailwindcss 的工具类。  

```jsx
<div className="bg-red-500">Hello</div>
```
