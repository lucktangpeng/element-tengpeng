module.exports = {
  // 用来创建界面上需要呈现的内容
  "stories": [
    '../packages/**/*.stories.js'
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // 插件
  "addons": [
    // 快速注册事件
    "@storybook/addon-links",
    // 快速注册链接
    "@storybook/addon-essentials"
  ]
}