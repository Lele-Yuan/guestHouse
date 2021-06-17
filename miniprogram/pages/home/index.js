// miniprogram/pages/home/index.js
const global = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    duration: 500,
    interval: 3000,
    background: [
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner01.jpeg',
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner02.jpeg',
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner03.jpeg',
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner04.jpeg',
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner05.jpeg',
      'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner06.jpeg',
    ],
    houseList: [{
      id: 1,
      coaverImage: 'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner04.jpeg',
    },{
      id: 2,
      coaverImage: 'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner02.jpeg',
    }],
    datePicker: global.globalData.datePicker,
  },
  onShow(){
    this.setData({
      datePicker: global.globalData.datePicker
    })

    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  openDatePrice(e){
    //跳转传值
    wx.navigateTo({
      url: `/pages/datePrice/datePrice`,
    })
  },
  toHouseDetail(e){
    let houseDetailData = e.currentTarget.dataset.detail
    //跳转传值
    wx.navigateTo({
      url: `/pages/houseDetail/detail?id=${houseDetailData.id}`,
    })
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})