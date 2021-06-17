// miniprogram/pages/datePrice/datePrice.js
const global = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeData: [
      {date: '', week: '', day: '', money: ''},
      {date: '', week: '', day: '', money: ''},
      {date: '2021-06-01', week: '3', day: '1', money: '100'},
      {date: '2021-06-02', week: '4', day: '2', money: '100'},
      {date: '2021-06-03', week: '5', day: '3', money: '100'},
      {date: '2021-06-04', week: '6', day: '4', money: '100'},
      {date: '2021-06-05', week: '7', day: '5', money: '100'},
    ]
  },

  datePicker: function(param){
    let selectedDays = param.detail
    // let pages = getCurrentPages(),
    //     prePage = pages[pages.length - 2];
    // prePage.setData({
    //   datePicker: selectedDays
    // })
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