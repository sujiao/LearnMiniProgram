// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"coderWhy",
    age:18,
    students:[
      { id: 110, name: 'kobe1', age: 31 },
      { id: 111, name: 'kobe2', age: 32 },
      { id: 112, name: 'kobe3', age: 33 },
      { id: 113, name: 'kobe4', age: 34 },
    ],
    counter:0
  },

  handleClick() {
    // 1、错误做法，值变化，但界面不会刷新
    // this.data.counter += 1

    //2、正确做法，this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick() {
    this.setData({
      counter: this.data.counter - 1
    })
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