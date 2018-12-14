const path = require("path");
// const vConsolePlugin = require("vconsole-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin"); //Gzip
function resolve(dir) {
  return path.join(__dirname, dir);
}
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; //Webpack包文件分析器
// const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
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
  configureWebpack: config => {
    //生产和测试
    let pluginsPro = [
      new CompressionPlugin({
        // filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        threshold: 8192, //对超过8k的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets: false //是否删除源文件
      })
      // new BundleAnalyzerPlugin()
    ];

    //开发环境
    let pluginsDev = [
      //移动端模拟开发者工具
      // new vConsolePlugin({
      //   filter: [],
      //   enable: true //发布代码前记得改回false
      // })
    ];
    if (process.env.NODE_ENV === "production") {
      config.plugins = [...config.plugins, ...pluginsPro];
    } else {
      config.plugins = [...config.plugins, ...pluginsDev];
    }
  },

  chainWebpack: config => {
    /**
     * 删除懒加载模块的prefetch，降低宽带压力
     */
    config.plugins.delete("prefetch");
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components")); //可以链式操作
    if (process.env.NODE_ENV === "production") {
      //为生产环境修改配置
    } else {
      //为开发环境修改配置
    }
  },
  //将接收ChainableConfig由webpack-chain提供支持的实例的函数。允许对内部webpack配置进行更细粒度的修改。
  css: {
    extract: false, //true在生产中，false在开发中
    sourceMap: false, //是否为css启用源映射，将此设置为true可能会影响构建性能
    modules: false, //启用css modules
    loaderOptions: {
      // css:{},
      postcss: {
        plugins: [
          require("autoprefixer"),
          require("postcss-px2rem")({ remUnit: 75, baseDpr: 2 }) // 换算的基数
        ]
      },
      sass: {
        ////设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        data: `@import "@/assets/scss/reset.scss";@import "@/assets/scss/fontSize.scss";`
      }
    }
  },
  devServer: {
    publicPath: "/", //始终以斜杠开始斜杠结束
    host: "0.0.0.0",
    port: 9000,
    https: false,
    useLocalIp: true,
    // compress: true, //为服务的一切启用gzip压缩
    // contentBase: path.join(__dirname, "static"),
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
    hotOnly: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  parallel: require("os").cpus().length > 1
  // pwa:{}
  //第三方插件
  // pluginOptions: {
  //   "style-resources-loader": {
  //     proProcessor: "scss",
  //     patterns: [
  //       //path.resolve(__dirname,'./src/assets/scss/_common.scss');
  //     ]
  //     //injector:'append'
  //   }
  // }
};
