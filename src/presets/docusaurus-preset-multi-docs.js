module.exports = function preset(context, opts = {}) {
  return {
    // themes: [["docusaurus-theme-awesome", opts.theme]],
    plugins: [
      //
      // 给每一个插件分配一个 ID，这样用户就不需要分配 ID 了
      ["@docusaurus/plugin-content-docs", { ...opts.docs1, id: "docs1" }],
      ["@docusaurus/plugin-content-docs", { ...opts.docs2, id: "docs2" }],
    ],
  };
};
