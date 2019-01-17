# rq-cp

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

```
See [Configuration Reference](https://cli.vuejs.org/config/).
```

## 项目涉及技术点

###脚手架

```

使用 Vue-Cli3.0 搭建项目


```

### Vuex 作为数据共享的中介

### 路由跳转采用 vue-Router

```
使用vueg插件实现路由转场的动画，提升用户体验
```

###UI 库

```
采用 Vant,结合官网配置 babel.config.js 如下：

plugins: [
[

'import',

{

libraryName: 'vant',

libraryDirectory: 'es',

style: true

// style: name => `${name}/style/less`

},

'vant'

]
]
```

###css 预编译器采用 sass
可以在初始化项目时即安装 sass，省去之后的手动配置

###骨架屏

```
采用 vue-skeleton-webpack-plugin 骨架屏插件，呈现页面前的骨架。需要配置骨架屏插件的入口的文件，
并在 vue.config.js 中配置如下：
function addSketonPlugin(config) {
return new SkeletonWebpackPlugin({
webpackConfig: merge(config, {
target: 'node',
devtool: false,
entry: {
app: path.join(\_\_dirname, './src/entry-skeleton.js')
},
output: Object.assign({}, config.output, {
libraryTarget: 'commonjs2'
}),
externals: nodeExternals({
whitelist: /\.css\$/
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
添加到配置中
config.plugins.push(addSketonPlugin(config))
```

### flexible.js，postcss-px2rem 和 px2rem-loader

```
使用 flexible.js 进行屏幕适配，单位采用 rem。
为了便于直接使用 px,需安装 px 自动转为 rem 的插件 px2rem-loader 和 postcss-px2rem
vue.config.js 的 css 中配置如下：
css: {
loaderOptions: {
// css:{},
postcss: {
plugins: [

require('autoprefixer'),

require('postcss-px2rem')({ remUnit: 75, baseDpr: 2 }) // 换算的基数

]
}
}
},

postcss.config.js 配置如下：
plugins: {
autoprefixer: {
// browsers: ["Android>=4.4", "IOS>=7"]
},
'postcss-px2rem-exclude': {
remUnit: 75
// exclude: /node_modules|assets|login|main/gi,
},
postcssPxtorem: {
rootValue: 37.5,
propList: ['*']
}
}
```

###svg

```
采用 SVG 在此基础上封装为 SVG 组件，只需要传入 svg 图标的名称，即可生成 SVG 文件。详情见 components/svg/SvgIcon.vue 组件。
vue.config.js 中需添加正确识别 Svg 的配置：
chainWebpack:config=>{
const svgRule = config.module.rule('svg')
svgRule.uses.clear()
svgRule
.test(/\.svg\$/)
.include.add(resolve('./src/icon'))
.end()
.use('svg-sprite-loader')
.loader('svg-sprite-loader')
.options({
// symbolId: 'icon-[name]'
})
}

```

##其它原创技术：

###自定义 vue 下拉刷新指令 v-refresh
使用原生 Js 和 Css3

###点击某个元素产生水波纹动画效果指令
使用 CSS3 动画实现

###非完整项目
其它待完成部分，可在有充足时间情况下，逐步推进，渐进实现。本项目目的是熟悉使用 vue-cli3 从零搭建开发环境和开发框架。
