App({
  globalData: {
    movie_types: {
      coming_soon: '近期上映',
      in_theaters: '正在热映',
      top250: '热门电影'
    }
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },
  dealData: function (data) {
    var backdata = [];
    var data = data.subjects;//拿到豆瓣返回的数据

    for (var key in data) {//遍历数据
      var x = data[key];
      console.log(x)
      var tmp = {};
      tmp.title = x.title.substring(0, 4) + '...';//拿到电影名字

      tmp.image = x.images.large;//电影海报地址
      var rating = {};//设置和move.js一样的数据格式
      rating.stars = this.getstars(x.rating.stars.substring(0, 1));//拿到星星的数组,并且转为1和0的格式
      console.log(rating.stars);
      rating.score = x.rating.average.toFixed(1);//拿到评分
      tmp.rating = rating;
      backdata.push(tmp);
    }
    return backdata;
  },
  getstars: function (starnum) {//设置星星数组的方法
    var stars = [];
    for (var index = 1; index <= 5; index++) {
      if (index <= starnum) {
        stars.push(1);
      }
      else {
        stars.push(0);
      }
    }
    return stars;
  },
 
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
