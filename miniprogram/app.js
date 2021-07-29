//app.js
import {getSystemBarInfo} from './utils/systemInfo'
import {getCloudDB} from './utils/db'
import {  } from './utils/utils'

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-0gyj9icmdb1409cc',
        traceUser: true,
      })
    }

    this.globalData = {}
    
    getCloudDB(this.globalData)

    getSystemBarInfo(this.globalData)

    this.setGlobalDatePick(wx.getStorageSync('dataParam'))
  },
  setGlobalDatePick(dateParam){
    if(dateParam.length == 2){
      this.globalData.datePicker = dateParam
      let start = dateParam[0].calendarDate
      let end = dateParam[1].calendarDate
      let dateCount = (new Date(end + ' 00:00:00').getTime() - new Date(start + ' 00:00:00').getTime()) / (1000*60*60*24)
      this.globalData.dateCount = dateCount

      wx.setStorageSync('dataParam', dateParam)
    }
  }
})
