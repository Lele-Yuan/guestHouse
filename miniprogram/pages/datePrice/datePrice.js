// miniprogram/pages/datePrice/datePrice.js
const global = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeData: [
      {date: '2021-07-30', week: '3', day: '1', money: '200'},
      {date: '2021-07-31', week: '3', day: '1', money: '300'},
      {date: '2021-08-01', week: '3', day: '1', money: '100'},
      {date: '2021-08-02', week: '4', day: '2', money: '100'},
      {date: '2021-08-03', week: '5', day: '3', money: '100'},
      {date: '2021-08-04', week: '6', day: '4', money: '100'},
      {date: '2021-08-05', week: '7', day: '5', money: '100'},
    ]
  },

  datePicker: function(param){
    let selectedDays = param.detail
    
    if(selectedDays.length == 2){
      global.setGlobalDatePick(selectedDays)
      wx.navigateBack()
    }
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
    // 获取日历组件
    this.dateSelect = this.selectComponent('#dateSelect')
    this.dateSelect.getMonth()
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