import { getToday, getMonthList, getMonthdays, placeHolder } from '../../utils/utils'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    timeData: {
      type: Array,
      value: []
    }
  },
  options: {
    addGlobalClass: true, // 允许使用公用css
  },
  /**
   * 组件的初始数据
   */
  data: {
    dayArr: [], //当月天数
    weekArr: ['日', '一 ', '二', '三', '四', '五', '六'],
    nowMonth: null, //当前月
    selectedDays: [],
    isClicked: false
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
 
    /**
     * 获取当前月后的 11个月的月份 
     */
    getMonth: function() {
      let monthArr = getMonthList()
 
      // console.log(monthArr)
      this.setData({
        monthArr: monthArr,
        newMonth: parseInt(monthArr[0].month, 10)
      })
      // 计算当前月天数
      this.getday(monthArr[0].year, monthArr[0].month)
 
      let todayData = getToday();
      this.setData({
        todayDate: todayData.todayDate,
        newYear: todayData.newYear,
        newYearDate: todayData.newYearDate
      })
    },
    /**
     *  获取 选中“月”天数
     */
    getday: function(year, month) {
      let dayArr = getMonthdays(year, month)

      this.setData({
        dayArr: dayArr
      })
      // console.log(dayArr)
      this.mergeFn()
      let dataParam = wx.getStorageSync('dataParam')
      this.setActived(dataParam[0])
      this.setActived(dataParam[1])
    },
    /**
     * 
     * 有金额的日期  ----->选择出行日期
     * timeData 接收的参数
     * 合并数据(当前日期匹配的有金额的日期)
     */
    mergeFn: function() {
      let timeData = this.data.timeData
      let dayArr = this.data.dayArr;
      dayArr.forEach(function(item, num) {
        timeData.forEach(function(data, index) {
          if (item.date === data.date) {
            item.money = data.money
          }
        })
      })
      // console.log(dayArr)
      this.setData({
        dayArr: dayArr
      })
    },
 
    /**
     * 月份点击
     */
    monthClick: function(e) {
      let clickIndex, monthArr;
      clickIndex = e.currentTarget.dataset.index;
      monthArr = this.data.monthArr;
      monthArr.forEach(function(data, index) {
        if (index === clickIndex) {
          data.isActive = true
        } else {
          data.isActive = false
        }
      })
      this.setData({
        monthArr: monthArr,
        newMonth: parseInt(monthArr[clickIndex].month, 10),
      })
 
      this.getday(monthArr[clickIndex].year, monthArr[clickIndex].month)
    },
    /**
     * 日期点击
     */
    _dayClick: function(e) {
      let clickIndex, dayArr;
      clickIndex = e.currentTarget.dataset.index;
      dayArr = this.data.dayArr;
      if(!this.data.isClicked){
        wx.removeStorageSync('dataParam')
        this.setData({
          isClicked: true,
          selectedDays: []
        })
      }
      // console.log(clickIndex)
      this.clearActived(this.data.selectedDays)
      if (dayArr[clickIndex].money) { 
 
        let selectedDay = {
          calendarDate: dayArr[clickIndex].date,
          calendarMoney: dayArr[clickIndex].money,
          calendarWeekday: this.data.weekArr[dayArr[clickIndex].day],
        }

        this.setActived(selectedDay)
  
        /**
         * 向父组件传参
         */
        this.triggerEvent('datePicker', this.data.selectedDays)
      }
 
    },

    setActived(selectedDay){

      let param = this.data.selectedDays
      if(param.length == 0){
        param.push(selectedDay)
      }else if(param.length == 1){
        let baseDay = new Date(param[0].calendarDate).getTime()
        let activeDay = new Date(selectedDay.calendarDate).getTime()
        if(baseDay < activeDay) {
          param.push(selectedDay)
        }else if(baseDay == activeDay){
          return
        }else{
          param = [selectedDay, param[0]]
        }
      }else{
        param = [selectedDay]
      }

      this.setData({
        selectedDays: this.data.selectedDays
      })
      this.clearActived(this.data.selectedDays)
    },

    // 设置选中状态
    clearActived(selectedDays){
      let dayArr = this.data.dayArr
      let startDatetime = selectedDays[0] ? new Date(selectedDays[0].calendarDate).getTime() : 0
      let endDatetime = selectedDays[1] ? new Date(selectedDays[1].calendarDate).getTime() : 0
      dayArr.forEach(function(data, index) {
        let itemDatetime = new Date(data.date).getTime()
        if(selectedDays.length == 1 && data.date === selectedDays[0].calendarDate){
          data.isActive = true
        } else if(selectedDays.length == 2 && itemDatetime >= startDatetime && itemDatetime <= endDatetime){
          data.isActive = true
        } else {
          data.isActive = false
        }
      })
      this.setData({
        dayArr: dayArr
      })
    },
  }
})