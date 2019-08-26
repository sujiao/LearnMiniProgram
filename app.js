App({

  //生命周期函数，后台存活两个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({      //异步调用
      success:function(res) {
        // console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow(每次进入都会执行)
   */
  onShow: function (options) {
    // console.log(options)  //小程序进入场景
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log("onhide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    // console.log("onerror")
  },
  globalData: {
    name:"coderWhy",
    age:18
  }
})
