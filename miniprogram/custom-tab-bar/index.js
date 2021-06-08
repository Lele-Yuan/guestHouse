Component({
  data: {
    "selected": 0,
    "color": "#666666",
    "selectedColor": "#88bac7",
    "list": [{
      "pagePath": "/pages/home/index",
      "text": "首页",
      "iconPath": "../images/icon/home.png",
      "selectedIconPath": "../images/icon/home-active.png"
    },{
      "pagePath": "/pages/my-center/index",
      "text": "个人中心",
      "iconPath": "../images/icon/person.png",
      "selectedIconPath": "../images/icon/person-active.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})