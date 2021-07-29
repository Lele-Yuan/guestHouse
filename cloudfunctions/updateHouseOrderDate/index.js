// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_EVN
})

// 云函数入口函数
exports.main = async (event, context) => {
  let _id = event._id, 
      dateList = event.dateList
  return cloud.database().collection('house').doc(_id).update({
    data: {orderedDate: dateList}
  })
}