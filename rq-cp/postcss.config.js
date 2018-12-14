module.exports = {
  plugins: {
    autoprefixer: {
      // browsers: ["Android>=4.4", "IOS>=7"]
    },
    "postcss-px2rem-exclude": {
      remUnit: 75
      // exclude: /node_modules|assets|login|main/gi,
    },
    postcssPxtorem: {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
