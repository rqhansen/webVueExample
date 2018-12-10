const path = require("path");
module.exports = {
  lintOnSave: false,
  baseUrl: "/",
  outputDir: "dist",
  assetsDir: "assert", //静态资源目录的上级目录(js，css，img，fonts)
  indexPath: "index.html",
  filenameHashing: false, //生成的静态资源在其文件名中是否包含哈希值，false(缓存处理)
  lintOnSave: true, //是否使用eslint-loader在开发期间执行lint-on-save
  runtimeCompiler: false, //是否使用包含运行时编译器的Vue核心的构建
  transpileDependencies: [], //默认babel-loader忽略其中的所有文件node_modules,如果要使用Babel显示转换依赖关系，可以在此选项中列出来
  productionSourceMap: false, //false表示不生成map文件
  crossorigin: undefined, //默认
  integrity: false, //默认
  //configureWebpack: Object|Function
  // configureWebpack: {
  // plugins: [
  //   new MyAwesomeWebpackPlugin()
  // ]
  // }
  // chainWebpack:Function
  //将接收ChainableConfig由webpack-chain提供支持的实例的函数。允许对内部webpack配置进行更细粒度的修改。
  css: {
    extract: true, //true在生产中，false在开发中
    sourceMap: false, //是否为css启用源映射，将此设置为true可能会影响构建性能
    loaderOptions: {
      // css:{},
      // postcss:{},
      sass: {
        // data: `@import "@/variables.scss"` //全局变量
      }
    },
    modules: false
  },
  devServer: {
    publicPath: "/", //始终以斜杠开始斜杠结束
    host: "0.0.0.0",
    port: 9000,
    useLocalIp: true,
    // compress: true, //为服务的一切启用gzip压缩
    contentBase: path.join(__dirname, "static"),
    // proxy: "https://api2.tgceshi.com:6869/lottery-api"
    proxy: {
      "^/api": {
        target: "https://api2.tgceshi.com:6869/lottery-api",
        changeOrigin: true
        // pathRewrite:{
        //   '^/api':''
        // }
      },
      "/socket": {
        target: "ws://192.168.1.168:8090",
        changeOrigin: true
        // pathRewrite:{
        //   '^/socket':''
        // }
      }
    },
    headers: {
      "X-custom-Foo": "rq"
    },
    open: "chrome",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  parallel: require("os").cpus().length > 1,
  // pwa:{}
  pluginOptions: {}
};
