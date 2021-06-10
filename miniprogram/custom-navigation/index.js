const app = getApp()
const globalData = app.globalData

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    close: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navTop: globalData.navTop + 'px',
    menuButtonHeight: globalData.menuButtonHeight + 'px',
    navHeight: globalData.navHeight + 'px'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backHome: function () {
      wx.reLaunch({
        url: '../index/index',
      })
    },
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
