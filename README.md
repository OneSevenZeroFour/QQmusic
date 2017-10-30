## React-QQMusic
#### 简介：
3个男人一个QQ音乐。
为了加强对React的理解，以及加深对移动端的概念，此超级精简版的QQ油然而生。

#### 原理简介：
首先这里通过NodeJs服务端代理和jsonp来进行跨域获取QQ音乐API数据，在[Wepack的config文件中](https://github.com/OneSevenZeroFour/QQmusic/blob/master/src/webpack.config.js)对API进行处理导出统一的方法来获取数据。  
核心文件则是在[store.js](https://github.com/OneSevenZeroFour/QQmusic/blob/master/src/store.js),在这里使用Redux统一管理排行榜、歌单等信息。所有对于歌曲的操作都通过Redux来进行全局管理，然后对相应的变化做出全局改变。

## 技术栈
- React
- Webpack
- Redux
- Es6
- axios
- jQuery等第三方库

#### 运行截图：
<div align="space-between">
    <img src="https://github.com/OneSevenZeroFour/QQmusic/blob/master/src/public/img/recommend.png" width="375" height="667">
    <img src="https://github.com/OneSevenZeroFour/QQmusic/blob/master/src/public/img/top.png" align="right" width="375" height="667">
</div>

## 项目组件
- [x] 首页 -- 完成（毛继陆）
- [ ] 电台 -- 无法获取电台API
- [x] 歌曲排行 -- 完成（谭健青）
- [x] 歌曲列表 -- 完成（谭健青、毛继陆）
- [x] 热门推荐 -- 完成（毛继陆）
- [x] 歌曲搜索 -- 10月30日，API报错503，腾讯，你…………（毛继陆）
- [ ] 歌曲播放 -- 未完成（陈国伟）
- [ ] 歌曲播放条 -- 未完成（陈国伟）

## 项目结构 ##
```

|-- src                              // 程序源码
|   |-- component                    // 谭健青组件目录
|       |-- CssInJs
|           |-- RankList.css.js
|           |-- TopList.css.js
|       |-- js
|           |-- SongList.js
|       |-- hit_newsong.jsx
|       |-- RankList.jsx
|       |-- Toplist.jsx
|       |-- TopListArticle.jsx
|       |-- TopListFooter.jsx
|       |-- TopListHeader.jsx
|   |-- components                   // 毛继陆组件目录
|       |-- carousel.jsx
|       |-- home.jsx
|       |-- recommand.jsx
|       |-- search.jsx
|       |-- searchbox.jsx
|       |-- tab.jsx
|       |-- taigeheader.jsx
|       |-- taoge.jsx
|       |-- top.jsx
|   |-- CSS                          // 样式目录
|       |-- base.css
|       |-- recommand.css
|       |-- search.css
|       |-- searchbox.css
|       |-- tab.css
|   |-- public                       // 发布版本目录
|       |-- image
|           |-- 01.png
|           |-- default_pic.jpg
|           |-- list_sprite.png
|           |-- logo.svg
|       |-- img
|           |-- 1.jpg
|           |-- 10.jpg
|           |-- 11.jpg
|           |-- 12.jpg
|           |-- 13.jpg
|           |-- 2.jpg
|           |-- 3.jpg
|           |-- 4.jpg
|           |-- 5.jpg
|           |-- 6.jpg
|           |-- 7.jpg
|           |-- 8.jpg
|           |-- 9.jpg
|           |-- list_sprite.png
|           |-- recommend.png
|           |-- top.png
|       |-- bundle.js
|       |-- bundle.js.map
|       |-- index.html
|   |-- .babelrc                     // 
|   |-- index.js                     // React入口文件
|   |-- package.json                 // 依赖包
|   |-- store.js                     // Redux数据管理文件
|   |-- webpack.config.js            // Webpack和NodeJS文件
|-- .gitignore                       //
|-- CODE_OF_CONDUCT.md               // Github合作协议
`-- README.MD                        // 介绍文档

```

## Build Setup

``` bash
# download
git clone git@github.com:OneSevenZeroFour/QQmusic.git

# change folder
cd src

# install dependencies
cnpm install

# serve with hot reload at localhost:12345
webpack

```

