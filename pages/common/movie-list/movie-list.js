// pages/common/movie-list/movie-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'正在热映',
  type:'in_theaters',
  movies:[
    {
    title:'后来的我们...',
    image: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg",
    rating:{
      stars:[1,1,1,0,0],
      score:'9.6'
    }
  }
  ,
  {
    title:"尖声惊叫",
    image:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519542323.jpg',
    rating: {
      stars: [1, 1, 0, 0, 0],
      score: "9.5"
    }
  },
    {
      title: "尖声惊叫",
      image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519542323.jpg',
      rating: {
        stars: [1, 1, 1, 1, 0],
        score: "3"
      }
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})