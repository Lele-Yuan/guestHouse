// miniprogram/pages/houseDetail/detail.js
import { getHouseDetail } from '../../service/houseService'

const global = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '',
    coverUrl: 'cloud://cloud1-0gyj9icmdb1409cc.636c-cloud1-0gyj9icmdb1409cc-1306066289/banner/banner01.jpeg',
    beds: [],
    datePicker: global.globalData.datePicker,
    dateCount: global.globalData.dateCount,
    ownerSay: '',
    isExpanded: false,
    facilityServicesData: [
      { text: '提供一次性洗漱用品'},
      { text: '禁止吸烟'},
      { text: '允许宠物入住'},
      { text: '住中保洁', extraCharge: true},
      { text: '宠物入住保洁', extraCharge: true},
      { text: '茶具'},
    ],
  },
  async onLoad(option){
    this.setData({
      id: option._id
    })
    let detailData = await getHouseDetail(this.data.id)
    this.setData({
      name: detailData.name,
      coverUrl: detailData.coverUrl,
      labels: detailData.labels,
      beds: detailData.beds,
      ownerSay: detailData.ownerSay,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      datePicker: global.globalData.datePicker,
      dateCount: global.globalData.dateCount
    })
  },

  openDatePrice(e){
    wx.navigateTo({
      url: `/pages/datePrice/datePrice`,
    })
  },

  checkOrder(e){
    wx.navigateTo({
      url: `/pages/checkOrder/index?_id=${this.data.id}`,
    })
  },

  openFacilityServicesPage: function(e) {
    wx.navigateTo({
      url: '/pages/facilityServices/facilityServices',
    })
  },

  toogleDetailExpand: function(e){
    this.setData({
      isExpanded: !this.data.isExpanded
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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