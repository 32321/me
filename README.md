# me
我的个人网站
## 今天遇到的问题
  点击a标签时页面会重新加载(即使给href值设置了#，也没用。)，解决办法：href="javascript:void(0)"
   ```
   overflow: hidden;    //隐藏内容变成三个点显示
   white-space: nowrap;
   text-overflow: ellipsis;
  ```
   overflow:hidden能够解决子元素和父元素外边距重合这个问题(具体：子元素设置了上边距时，它的父元素也会有这个上边距。解决办法：overflow:hidden)
   给元素设置大小时一定要注意，特别是设置百分比的大小的时候。
   今天没解决的问题：就是请求加载自己之前写的一个demo时请求失败。
   #### ThirdDay 优化了导航栏 设置了博客的基本样式，明天再优化，加载了自己之前的demo,明天继续。
