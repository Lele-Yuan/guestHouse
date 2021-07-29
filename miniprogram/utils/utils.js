
/**
 * 获取当前日期
 */
function getToday() {
  /**
   * 获取今天的日期，用来区分与其他日期显示的样式
   */
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let todayDate = year + '-' + placeHolder(month + 1) + '-' + placeHolder(day);
  /**
   *  区分今年和新的一年
   */
  let newYear = year + 1 + '-01';
  let newYearDate = (year + 1).toString().slice(2) +'年01'
  return {
    todayDate,
    newYear,
    newYearDate,
  }
}

/**
 * 获取当前时间
 */
function getNowTime(){
  return dateFormat(new Date(), 'YYYY-mm-dd HH:MM:SS.sss')
}

/**
 * 时间格式化
 * @function
 * @param {string} fmt YYYY-mm-dd HH:MM:SS:ss
 * @param {Date} date 
 */
export function dateFormat(date, fmt='YYYY-mm-dd') {
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString(),          // 秒
      "s+": date.getMilliseconds().toString()          // 毫秒
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

/**
 * 获取当前月后的 11个月的月份 
*/
function getMonthList() {
  let date, newMonth = 0,
    getMonth, getYear, monthArr = [],
    that = this;
  date = new Date();
  getYear = date.getFullYear();
  getMonth = date.getMonth();
  for (let i = 0; i < 12; i++) {
    if (getMonth < 12) {
      getMonth++;
      let monthData = {
        month: placeHolder(getMonth),
        year: getYear,
        yearMonth: getYear + '-' + placeHolder(getMonth),
        isActive: false
      }
      monthArr.push(monthData)
    } else {
      newMonth++
      let monthData = {
        month: placeHolder(newMonth),
        year: getYear + 1,
        yearMonth: getYear + 1 + '-' + placeHolder(newMonth),
        isActive: false
      }
      // console.log(monthData)
      monthArr.push(monthData)
    }

  };
  monthArr[0].isActive = true

  return monthArr
}

/**
 *  获取 选中“月”天数
 */
function getMonthdays(year, month) {
  month = parseInt(month, 10);
  let day = new Date(year, month, 0);
  let allDay = day.getDate();
  let dayArr = [];
  for (let i = 1; i < allDay + 1; i++) {
    let date = year + '-' + placeHolder(month) + '-' + placeHolder(i)
    let dayDatail = {
      date: date, // 完整时间 ‘2019-08-05’
      week: new Date(date).getDay(), //星期几
      day: i, // 几号   
      money: '', // 金额
      isActive: false //是否选中
    }
    dayArr.push(dayDatail)
  }

  /**
   * 占位
   * 功能：将“天”数对应到“星期”下
   */
  let forNum = dayArr[0].week - 0;
  for (let t = 0; t < forNum; t++) {
    let test = {
      date: '',
      week: '',
      day: '',
      money: ''
    }
    dayArr.unshift(test)
  }

  return dayArr
}

/**
 * 获取选择的日期数组
 */
function getSelectedDays(startDate, endDate){
  const oneDay = 1000*60*60*24
  let dayArr = []
  let startTime = new Date(startDate + ' 00:00:00').getTime(),
      endTime = new Date(endDate + ' 00:00:00').getTime()
  let dateCount = Math.abs(endTime - startTime) / oneDay
  for (let index = 0; index < dateCount; index++) {
    dayArr.push(dateFormat(new Date(startTime + index * oneDay)))
  }
  
  return dayArr
}

/**
 * 时间补位  小于10加'0'
 * 7 ==> '07'
 */
function placeHolder(data) {
  if (data < 10) {
    data = '0' + data
    return data
  } else {
    return data.toString()
  }
}

module.exports = {
  getToday,
  getNowTime,
  dateFormat,
  getMonthList,
  getMonthdays,
  getSelectedDays,
  placeHolder,
}