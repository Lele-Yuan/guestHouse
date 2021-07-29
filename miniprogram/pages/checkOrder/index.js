// miniprogram/pages/checkOrder/index.js
import { getHouseDetail } from '../../service/houseService'
import { addOrder } from '../../service/orderService'
import { getNowTime, getSelectedDays } from '../../utils/utils'

const global = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datePicker: [],
    dateCount: 0,
    houseDetail: {},
    userName: '',
    userPhone: '',
    userCount: ''
  },

  onShow: function () {
    this.setData({
      datePicker: global.globalData.datePicker,
      dateCount: global.globalData.dateCount
    })
  },

  async onLoad(option){
    this.setData({
      id: option._id
    })
    let detailData = await getHouseDetail(this.data.id)
    this.setData({
      houseDetail: detailData,
    })
  },

  openPriceList(){
    console.log('打开价格明细表')
  },

  bindCountInput: function (e) {
    this.setData({
      userCount: e.detail.value
    })
  },
  bindNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  bindPhoneInput: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  async checkOrder(){
    let dataParam = wx.getStorageSync('dataParam')
    
    let orderParams = {
      currentTime: getNowTime(),
      houseId: this.data.id,
      orderDate: getSelectedDays(dataParam[0].calendarDate, dataParam[1].calendarDate),
      userCount: this.data.userCount,
      userName: this.data.userName,
      userPhone: this.data.userPhone,
      userId: ''
    }

    if(!orderParams.userCount || !orderParams.userName || !orderParams.userPhone){
      wx.showToast({
        title: '请完善订单信息',
        icon: 'none'
      })
      return
    }
    let result = await addOrder(orderParams)
    if(result._id){
      wx.reLaunch({
        url: `/pages/orderDetail/index?_id=${result._id}`
      })
    }
  }
})