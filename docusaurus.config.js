// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 代码高亮插件
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    // 网站名称
    title: "Jetzihan",
    tagline: "",
    url: "https://jetzihan.netlify.app",
    // baseUrl: '/MyNewBlog/',  // ghpages建议这样
    baseUrl: "/", // Netlify建议这样
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",


    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "inannan423", // Usually your GitHub org/user name.
    projectName: "inannan423.github.io", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/inannan423/inannan423.github.io/tree/main/",
                },


                blog: {
                    showReadingTime: true,
                    blogSidebarTitle: "Blogs",
                    blogSidebarCount: "ALL",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/inannan423/inannan423.github.io/tree/main",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
        // [
        //   "./src/presets/docusaurus-preset-multi-docs.js",
        //   {
        //     theme: { hello: "world" },
        //     docs1: { path: "docs/FrontEnd" },
        //     docs2: { path: "docs/BackEnd" },
        //   },
        // ],
    ],
    themes: [
        //在线编码插件
        "@docusaurus/theme-live-codeblock",
        [
            //搜索插件
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
            },
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        (
            {
                navbar: {
                    title: "Jetzihan",
                    logo: {
                        alt: "Jetzihan",
                        src: "img/logo.png",
                    },

                    items: [
                        {
                            type: "search",
                            position: "right",
                        },
                        {
                            label: "Notes",
                            position: "left",
                            items: [
                                {
                                    label: "FrontEnd",
                                    to: "docs/front/",
                                },
                                {
                                    label: "Study",
                                    to: "docs/study/",
                                },
                                {
                                    label: "BackEnd",
                                    to: "docs/back/",
                                },
                            ],
                        },
                        {to: "/blog", label: "Blog", position: "left"},
                        {
                            label: "Projects",
                            position: "left",
                            items: [
                                {
                                    label: "Daymd",
                                    to: "https://daymd.netlify.app/zh",
                                },
                                {
                                    label: "SVG-Board",
                                    to: "/projects",
                                },
                                {
                                    label: "cssPano",
                                    to: "/projects_csspano",
                                },
                                {
                                    label: "Nebula",
                                    to: "/stars",
                                },
                            ],
                        },
                        {
                            label: "Links",
                            position: "left",
                            to: "website",
                        },
                        {
                            label: "Sandpack",
                            position: "right",
                            to: "CodingOnline",
                            className: "SandBoxButton",
                        },
                        {
                            href: "https://github.com/inannan423",
                            // label: 'GitHub',
                            position: "right",
                            className: "header-github-link",
                            "aria-label": "Github repository",
                        },
                        // {
                        //   href: 'https://github.com/inannan423',
                        //   html: `<a href="https://github.com/inannan423" target="_blank"><img class="img" style="height:35px;position:relative;top:5px" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/gtihb1.png"/><a/>
                        //   <style>
                        //   .img{
                        //     transition:all 1s ease-in-out;
                        //     width:110px;
                        //   }
                        //   .img:hover{
                        //     opacity:0.6;

                        //   }
                        //   </style>
                        //   `,
                        //   position: 'right',
                        // },
                    ],
                },
                announcementBar: {
                    id: 'support_us',
                    content:
                        '博客已移至新网站，此站已废弃，请访问： <a target="_blank" rel="noopener noreferrer" href="https://jetlab.live">jetlab</a>',
                    backgroundColor: '#fafbfc',
                    textColor: '#091E42',
                    isCloseable: false,
                },
                // 链接
                metadata: [
                    {name: "msvalidate.01", content: "7BFDC4075777E569E05945A5D040DA05"},
                ],
                //   announcementBar: {
                //   id: 'announcementBar-3',
                //   content: 'In code we trust.',
                // },
                footer: {
                    style: "light",
                    links: [
                        {
                            items: [
                                {
                                    html: `<img style="position:relative;height:60px;left:-10px;top:-15px" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/fter.png"/>
                <br/>Copyright © ${new Date().getFullYear()} 
                <br/>
                <p style="opacity:0.6;font-family:ubuntu;font-size:0.5rem;font-weight:500">Made with ❤ by Chengzihan. 
                <br> Powered by Docusaurus.  <br/>
                MIT LICENSE</p>
               `,
                                },
                            ],
                        },
                        {
                            title: "Website",
                            items: [
                                {
                                    label: "Home",
                                    to: "/",
                                },
                                {
                                    label: "Front-end",
                                    to: "/docs/front",
                                },
                                {
                                    label: "Back-end",
                                    to: "/docs/back",
                                },
                                {
                                    label: "Study",
                                    to: "/docs/study",
                                },
                                {
                                    label: "Blog",
                                    to: "/blog",
                                },
                                {
                                    label: "Sandpack",
                                    to: "/CodingOnline",
                                },
                            ],
                        },
                        {
                            title: "Tech Links",
                            items: [
                                // {
                                //   label: 'Docusaurus',
                                //   href: 'https://docusaurus.io/zh-CN/',
                                // },

                                {
                                    label: "React",
                                    href: "https://react.docschina.org/",
                                },
                                {
                                    label: "Vue.js",
                                    href: "https://react.docschina.org/",
                                },
                                {
                                    label: "Python",
                                    href: "https://www.w3school.com.cn/python/index.asp",
                                },
                                {
                                    label: "Java",
                                    href: "https://zq99299.github.io/java-tutorial/",
                                },
                                {
                                    html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/buildwith.png"/><a/>
                
                `,
                                },
                            ],
                        },
                        {
                            title: "Projects",
                            items: [
                                {
                                    label: "Daymd",
                                    href: "https://daymd.netlify.app/zh",
                                },
                                {
                                    label: "csspano",
                                    href: "https://csspano.netlify.app",
                                },
                                {
                                    label: "nanMiniProgram",
                                    href: "https://github.com/inannan423/orange-nan-mini_program",
                                },
                                {
                                    label: "SVG Board",
                                    href: "https://inannan423.github.io/Svg_Board/#/",
                                },
                            ],
                        },
                        {
                            title: "More",
                            items: [
                                {
                                    label: "源代码",
                                    href: "https://github.com/inannan423/inannan423.github.io",
                                },
                                {
                                    label: "北林计协",
                                    href: "https://bljx2022project.github.io/bljx_blog/",
                                },
                                {
                                    label: "四外维科技",
                                    href: "https://swwtech.github.io/",
                                },
                                {
                                    html: `<a href="https://www.netlify.com/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/netlify.png"/><a/>
                
                `,
                                },
                            ],
                        },
                    ],
                },
                prism: {
                    theme: require("prism-react-renderer/themes/dracula"),
                    darkTheme: darkCodeTheme,
                    additionalLanguages: ["java"],
                },

                imageZoom: {
                    // CSS selector to apply the plugin to, defaults to '.markdown img'
                    selector: ".markdown img",
                    // Optional medium-zoom options
                    // see: https://www.npmjs.com/package/medium-zoom#options
                    options: {
                        margin: 24,
                        background: "#BADA55",
                        scrollOffset: 0,
                        container: "#zoom-container",
                        template: "#zoom-template",
                    },
                },
            }),
};

module.exports = config;
