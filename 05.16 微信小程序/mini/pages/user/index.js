// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: "zs",
      age: 18
    },
    count: 0,
    students: [
      { name: '张三', age: 18 },
      { name: '李四', age: 22 },
      { name: '王五', age: 21 },
    ],
    tabs: ['红色', '绿色', '黄色'],
    active: 0
  },

  add() {
    console.log(this.data.count);
    this.setData({
      count: ++this.data.count
    })
  },

  sub() {
    this.setData({
      count: --this.data.count
    })
  },

  tabClick(event) {
    console.log(event);
    var index = event.target.dataset.index
    this.setData({
      active: index
    })
  },

  toLog() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
    // wx.reLaunch({
    //   url: '/pages/logs/logs',
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:7111/wangyiyun/banner',
      success: res => {
        console.log(res);
      }
    })
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