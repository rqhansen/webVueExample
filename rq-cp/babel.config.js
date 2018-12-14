module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es"
        // style: true
        //配置的style,用于自定义主题
        // style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
