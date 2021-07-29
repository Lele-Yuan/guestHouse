// miniprogram/pages/home/index.js
import { getHouseList } from '../../service/houseService'

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
    houseList: [],
  },
  async onLoad(){
    let houseList = await getHouseList()
    this.setData({
      houseList: houseList
    })
  },
  onShow(){
    // 设置自定义底部导航选中值
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  toHouseDetail(e){
    let houseDetailData = e.currentTarget.dataset.detail
    //跳转传值
    wx.navigateTo({
      url: `/pages/houseDetail/detail?_id=${houseDetailData._id}`,
    })
  },
  /**
   * 设置底部导航的选中状态
   */
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