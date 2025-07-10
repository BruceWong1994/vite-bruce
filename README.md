# vite-bruce

vite是前端的构建工具
1.使用原生 ESM 文件，无需打包!
2.无论应用程序大小如何，都始终极快的模块热替换（HMR）
3.对 TypeScript、JSX、CSS 等支持开箱即用。
4.可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
5.在开发和构建之间共享 Rollup-superset 插件接口。
6.灵活的 API 和完整的 TypeScript 类型。

相较于webpack，vite采用了不同的运行方式：
    1.开发时，并不对代码打包，而是直接采用ESM的方式来运行项目
    2.在项目部署时，再对项目进行打包