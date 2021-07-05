const path = require("path");
// const {applyMock} = require("./build/mock")
const pkg = require("./package.json");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  // outputDir: process.env.NODE_ENV === 'production' ? 'admin/' : 'dist/',
  chainWebpack: chain => {
    if (pkg && pkg.version) {
      chain.plugin("define").tap(([options]) => {
        options["process.env"]["VUE_APP_NAME"] = `"${pkg.name}"`;
        options["process.env"]["VUE_APP_VERSION"] = `"${pkg.version}"`;
        return [options];
      });
    }
    const svgRule = chain.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .oneOf("normal")
      .exclude.add(resolve("src/icons"))
      .end()
      .use("file-loader")
      .loader("file-loader")
      .end()
      .end()
      .oneOf("sprite")
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["src/icons"]
      })
      .end()
    chain.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        options.limit = 1;
        return options;
      });
    // .options({
    //   limit: inlineLimit,
    //   name: `img/[name].[hash:8].[ext]`
    // })
  },
  css: {
    loaderOptions: {
      sass: {
        // data: '@import "@/styles/_mixin.scss";' // 全局引入
      }
    }
  },
  configureWebpack: function (config) {
    // console.log(config.module.rules[2])
    return {
      resolve: {
        // extensions: ['.js', '.json'],
        alias: {
          "@": path.resolve(__dirname, "./src")
        }
      }
    };
  },
  // devServer 选项单独配置
  devServer: {
    https: false,
    proxy: {
      "/api/v1": {
        target: "http://10.32.86.47:8888", // 域名
        changOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
      "/mock": {
        target: "http://10.32.86.47:8300", // 域名
        changOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
      "/mq": {
        target: "http://10.32.86.47:8080", // 域名
        changOrigin: true,
        pathRequiresRewrite: {
          "^/mq": "/"
        }
      },
      "/api": {
        target: "http://10.32.86.47:8080"
      },
      "/entrance": {
        target: "http://10.32.86.47:8080"
        // target: "http://192.168.31.221:8082"
      },
      "/xscommand": {
        //资源中心
        target: "http://10.12.107.48:9080"
      },
      "/command": {
        target: "http://10.12.107.48:9080" // 刘祥龙 ip: 10.10.71.20:9080  ~ 内网 ip http://10.12.107.48:9080
      },
      "/direct": {
        target: "http://10.12.107.48:9080" // 洪凯 ip: 10.10.70.231:9080  ~ 内网 ip http://10.12.107.48:9080
      },
      "/publicservice": {
        target: "http://10.12.107.48:9910/"
      },
      "/cityscapeAi": {
        target: "http://10.12.107.48:8083/"
        // target: "http://10.10.70.145:8083/"
      },
      // "/cityscapeAi/workAccounter": {
      //   target: 'http://10.10.71.226:8083/',
      // },
      "/fileManagement": {
        target: "http://10.12.107.48:9044"
      },
      "/citymanagement": {
        target: "http://10.12.107.48:8084"
      },
      "/citymanage": {
        target: "http://10.12.107.48:8500"
      },
      "/commandTask": {
        target: "http://192.168.137.176:8088"
      },
    },
    before: app => {
      // applyMock(app)
    }
  }
};