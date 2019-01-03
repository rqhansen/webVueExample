const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const vConsolePlugin = require('vconsole-webpack-plugin') //移动端调试插件
const CompressionPlugin = require('compression-webpack-plugin') //Gzip
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin') //骨架屏插件
const isProduction = process.env.NODE_ENV === 'production'
// const sourceMapEnabled = isProduction
//     ? config.build.productionSourceMap
//     : config.dev.cssSourceMap
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin //Webpack包文件分析器

function resolve(dir) {
    return path.join(__dirname, dir)
}

/**
 * 2018.12.21 by xiaoren
 * @description 配置Svg
 */
function addSvgConfig(config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .test(/\.svg$/)
        .include.add(resolve('./src/icon'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            // symbolId: 'icon-[name]'
        })
}

/**
 * 2018.12.21 by xiaoren
 * @description 开启Gzip压缩
 */
function getGzipPluginObj() {
    return new CompressionPlugin({
        // filename: "[path].gz[query]",
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 8192, //对超过8k的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets: false //是否删除源文件
    })
}

// 2018.12.21 by xiaoren
//骨架屏路由
const routes = [
    {
        path: '/home',
        skeletonId: 'skeleton1'
    },
    {
        path: '/login',
        skeletonId: 'skeleton2'
    }
]

/**
 * 2019 1.3 by xiaoren
 * @description 骨架屏插件
 */
function addSketonPlugin(config) {
    return new SkeletonWebpackPlugin({
        webpackConfig: merge(config, {
            target: 'node',
            devtool: false,
            entry: {
                app: path.join(__dirname, './src/entry-skeleton.js')
            },
            output: Object.assign({}, config.output, {
                libraryTarget: 'commonjs2'
            }),
            externals: nodeExternals({
                whitelist: /\.css$/
            }),
            plugins: []
        }),
        minimize: true,
        quiet: true,
        router: {
            mode: 'history',
            routes: routes
        }
    })
}

/**
 * 2018.12.21 by xiaoren
 * @description 移动端调试工具
 */
function getVconsolePluginObj() {
    return new vConsolePlugin({
        filter: [],
        enable: false //发布代码前记得改回false
    })
}
module.exports = {
    lintOnSave: false,
    baseUrl: '/',
    outputDir: 'dist',
    assetsDir: 'static', //静态资源目录的上级目录(js，css，img，fonts)
    indexPath: 'index.html',
    filenameHashing: false, //生成的静态资源在其文件名中是否包含哈希值，false(缓存处理)
    lintOnSave: true, //是否使用eslint-loader在开发期间执行lint-on-save
    runtimeCompiler: false, //是否使用包含运行时编译器的Vue核心的构建
    transpileDependencies: [], //默认babel-loader忽略其中的所有文件node_modules,如果要使用Babel显示转换依赖关系，可以在此选项中列出来
    productionSourceMap: false, //false表示不生成map文件
    crossorigin: undefined, //默认
    integrity: false, //默认
    configureWebpack: config => {
        config.plugins.push(addSketonPlugin(config))
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(getGzipPluginObj())
        } else {
            config.plugins.push(
                getVconsolePluginObj(),
                new BundleAnalyzerPlugin()
            )
        }
    },

    chainWebpack: config => {
        config.plugins.delete('prefetch') //删除懒加载模块的prefetch，降低宽带压力
        config.resolve.symlinks(true) //修复热更新
        config.externals = {
            //防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
            vue: 'Vue',
            vant: 'Vant',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios'
        }
        config.resolve.alias.set('public', resolve('public'))
        addSvgConfig(config)
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        //     .exclude.add(resolve('./src/icon'))

        if (process.env.NODE_ENV === 'production') {
            //为生产环境修改配置
        } else {
            //为开发环境修改配置
        }
    },
    //将接收ChainableConfig由webpack-chain提供支持的实例的函数。允许对内部webpack配置进行更细粒度的修改。
    css: {
        extract: true, //true在生产中，false在开发中(true开启样式分离,false导致骨架屏样式失效)
        // sourceMap:sourceMapEnabled
        sourceMap: false, //是否为css启用源映射，将此设置为true可能会影响构建性能
        modules: false, //启用css modules
        loaderOptions: {
            // css:{},
            postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('postcss-px2rem')({ remUnit: 75, baseDpr: 2 }) // 换算的基数
                ]
            },
            sass: {
                ////设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
                // data: `@import "@/assets/scss/index.scss";`
            }
        }
    },
    devServer: {
        publicPath: '/', //始终以斜杠开始斜杠结束
        host: '0.0.0.0',
        port: 9000,
        // https: false,
        useLocalIp: true,
        // compress: true, //为服务的一切启用gzip压缩
        // contentBase: path.join(__dirname, "static"),
        // proxy: "https://api2.tgceshi.com:6869/lottery-api"
        proxy: {
            '^/api': {
                target: 'https://api2.tgceshi.com:6869/lottery-api',
                changeOrigin: true
                // pathRewrite:{
                //   '^/api':''
                // }
            },
            '/socket': {
                target: 'ws://192.168.1.168:8090',
                changeOrigin: true
                // pathRewrite:{
                //   '^/socket':''
                // }
            }
        },
        // headers: {
        //     'X-custom-Foo': 'rq'
        // },
        open: 'chrome',
        hotOnly: true
        // overlay: {
        //     warnings: true,
        //     errors: true
        // }
    },
    parallel: require('os').cpus().length > 1
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
    // pluginOptions:{

    // }
}
