const app = getApp()
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath:"/assets/icon/translate.png",
      selectedIconPath:'/assets/icon/translate_selected.png',
      text: "翻译"
    }, {
      pagePath: "/pages/change/change",
      iconPath: "/assets/icon/change.png",
      selectedIconPath: '/assets/icon/change_selected.png',
      text: "切换"
    }, {
      pagePath: "/pages/history/history",
      iconPath: "/assets/icon/history.png",
      selectedIconPath: '/assets/icon/history_selected.png',
      text: "历史"
    }]
  },
  attached() {
    console.log(1111)
  },
  methods: {
    switchTab(e){
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      wx.switchTab({ url })
      console.log('before tap',this.data.selected)
      this.setData({
        selected: data.index
      })
      console.log(app)
      console.log('after tap',this.data.selected)
    }
  }
})

