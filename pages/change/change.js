// pages/change/change.js
const app=getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function (e) {
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('langeuage', langObj)
    this.setData({ 'curLang': langObj })
    app.globalData.curLang = langObj
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})