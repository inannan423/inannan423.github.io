// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 代码高亮插件
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站名称
  title: 'Jetzihan',
  tagline: '',
  url: 'https://jetzihan.netlify.app',
  // baseUrl: '/MyNewBlog/',  // ghpages建议这样
  baseUrl:'/',  // Netlify建议这样
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inannan423', // Usually your GitHub org/user name.
  projectName: 'inannan423.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/inannan423/inannan423.github.io/tree/main/',
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/inannan423/inannan423.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    //在线编码插件
    '@docusaurus/theme-live-codeblock',
    [
      //搜索插件
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jetzihan',
        logo: {
          alt: 'Jetzihan',
          src: 'img/logo.png',
        },
        
        items: [
          {
          label: 'Notes',
          position: 'right',
          items: [
            {
              label: 'FrontEnd',
              to: 'docs/front/',
            },
            {
              label: 'Study',
              to: 'docs/study/',
            },
          ],
        },
          { to: '/blog', label: 'Blog', position: 'right' },
          // { to: 'archive', label: 'Archive', position: 'right' },
          {
          label: 'Links',
          position: 'right',
          to: 'website',
        },
          {
            href: 'https://github.com/inannan423',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 链接
      metadata: [{ name: 'msvalidate.01', content: '7BFDC4075777E569E05945A5D040DA05' }],
    //   announcementBar: {
    //   id: 'announcementBar-3',
    //   content: 'In code we trust.',
    // },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Front-end',
                to: '/docs/front',
              },
              {
                label: 'Study',
                to: '/docs/study',
              },
            ],
          },
          {
            title: 'Tech Links',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/zh-CN/',
              },
              {
                label: 'React',
                href: 'https://react.docschina.org/',
              },
              {
                label: 'Vue.js',
                href: 'https://react.docschina.org/',
              },
            ],
          },
          {
            title: 'Coding',
            items: [
              {
                label: 'Python',
                href: 'https://www.w3school.com.cn/python/index.asp',
              },
              {
                label: 'Java',
                href: 'https://zq99299.github.io/java-tutorial/',
              },
              {
                label: '微信小程序',
                href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Source Code',
                href: 'https://github.com/inannan423/inannan423.github.io',
              },
              {
                label: '北林计协',
                href: 'https://bljx2022project.github.io/bljx_blog/',
              },
              {
                label: '四外维科技',
                href: 'https://swwtech.github.io/',
              },
              {
                html:`<a href="https://www.netlify.com/" target="_blank"><img style="height:50px" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/netlify.png"/><a/>`
              }
            ],
          },
        ],
        copyright: `<br/> Copyright © ${new Date().getFullYear()} Made with ❤ by Chengzihan. <br> Powered by Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
