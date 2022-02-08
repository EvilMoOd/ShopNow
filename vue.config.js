module.exports = {
    //关闭eslint
    lintOnSave: false,
    //配置跨域代理服务器
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.98.123.211",
                // pathRewrite: { "^/api": "" }
            }
        }
    }
}