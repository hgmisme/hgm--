//index.js
//方法一:获取应用实例,在app.js里写想要的方法 再在这个页面引用
// const app = getApp();//拿到app.js里的数据
// var movie_types = app.globalData.movie_types;//所有的电影类型
// console.log(movie_types)

//方法二:直接将想要的方法写进page里 再用this调用
var globalData = {
  movie_types: {
    coming_soon: '近期上映',
    in_theaters: '正在热映',
    top250: '热门电影'
  }
}
var movie_types = globalData.movie_types; //所有的电影类型
Page({
  data: {
    listdata: [

    ],
    search_word: '搜索'
  },
  onLoad: function(options) { //遍历每个电影类型
    for (var key in movie_types) {
      this.getData(key, movie_types[key]);
      console.log(key + "..." + movie_types[key])
    }
    //  this.getData("coming_soon", '近期上映');
    //  this.getData("in_theaters", '正在热映');
    //  this.getData("top250", '热门电影');
    console.log(movie_types)
  },
  dealData: function(data) { //拿到 movie-list.js里想要的movie数组的数据
    var backdata = [];
    var data = data.subjects; //拿到豆瓣返回的数据

    for (var key in data) { //遍历数据
      var x = data[key];
      console.log(x)
      var tmp = {};
      tmp.title = x.title.substring(0, 4) + '...'; //拿到电影名字

      tmp.image = x.images.large; //电影海报地址
      var rating = {}; //设置和move.js一样的数据格式
      rating.stars = this.getstars(x.rating.stars.substring(0, 1)); //拿到星星的数组,并且转为1和0的格式
      console.log(rating.stars);
      rating.score = x.rating.average.toFixed(1); //拿到评分
      tmp.rating = rating;
      backdata.push(tmp);
    }
    console.log(backdata)
    return backdata;
  },
  getstars: function(starnum) { //设置星星数组的方法
    var stars = [];
    for (var index = 1; index <= 5; index++) {
      if (index <= starnum) {
        stars.push(1);
      } else {
        stars.push(0);
      }
    }
    return stars;
  },
  getData: function(movie_type, title) {
    var self = this; //代表全局,为了将更改page里的data
    wx.request({
      url: 'http://t.yushu.im/v2/movie/' + movie_type,
      data: {
        count: 5
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.subjects);
        console.log(res.data);
        var s = {};
        s.title = title;
        s.type = movie_type;
        s.movies = self.dealData(res.data);
        var listdata = self.data.listdata;
        listdata.push(s);
        // console.log(s);
        self.setData({
          listdata
        });
      }
    })
  },



  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})