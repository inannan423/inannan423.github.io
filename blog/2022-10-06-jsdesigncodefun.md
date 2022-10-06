---
slug: jsdesigncodefun
title: 即时设计和 codefun 使用
authors: Chengzihan
tags: [即时设计, codefun]
---
## 前言

对于一名合格的前端工程师来说，UI 图转代码的能力是不可或缺的能力，在人工智能大力发展的今天，UI 转代码的 AI 工具也在便捷着前端工程师的工作，这里就借助即时设计工具和 codefun 插件来介绍一下基本流程。  

## 即时设计使用

### 介绍

即时设计是可云端编辑的专业级 UI 设计工具，为中国设计师量身打造。它和Adobe XD、Figma、Sketch等设计工具有着一样的功能。

### 下载和安装

在[即时设计官网](https://js.design/download)下载即时设计，安装即可使用。

### 导出切图

有时候我们需要导出设计师设计的图片，我们只需要在项目中选中图片，在右边的边栏中选择导出，即可导出图片。  

![1](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665035307457.png)

:::warning 注意
为了图片在设备上能够清晰地显示，请选择合适的尺寸，这里选择的是 4x。
:::

## Codefun 使用

### 介绍

CodeFun 是一款 UI 设计稿智能生成源代码的工具，可以将 Sketch、Photoshop 的设计稿智能转换为前端源代码。它最大的特色是：

- 精准还原设计稿，不再需要反复 UI 走查
- 可以生成如工程师手写一般的代码

在日常工作中，诸如像**扣像素、调布局**这些繁琐、枯燥的体力活都将得到极大的削减，原来 8 小时的工作量只需要 10 来分钟即可完成。

### 下载和安装

打开需要使用的 UI 稿件。  

![1](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665035835221.png)

找到左侧的 UI 按钮，点击后会弹出一个弹窗，选择左上角的省略号，选择获取更多插件。在搜索中搜索 **CODE.FUN**，点击安装即可。  

![1](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665035912416.png)

![2](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221006135937.png)

回到 UI 稿件，还是在左侧插件栏中，找到 CodeFun。  

![2](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665036234929.png)

使用**微信登录**。点击 + 号，创建项目，点击页面的标题，选中页面，点击上传，当然，也可以选择上传全部。  

![3](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221006140653.png)

待处理完成。完成后点击打开，在项目的页面中选择需要转换的页面。  

![3](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665036822886.png)

点击查看代码，即可查看转换后的代码。  

![5](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1665036913938.png)

![5](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221006141649.png)

:::tip 提示
建议不要完全使用 CodeFun 生成的代码，因为它生成的代码不是很规范，不利于维护。使用这个工具是用来参考数据比例以及布局的，然后自己手动写代码。
:::
