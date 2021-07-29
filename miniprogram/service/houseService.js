async function getHouseList() {
  let resultList = []
  await wx.cloud.callFunction({
    name: 'getHouseList'
  }).then(result => {
    resultList = result.result.data
  }).catch(err => {
    console.log(err)
  })
  return resultList
}
async function getHouseDetail(_id) {
  
  let houseDetail = {}
  await wx.cloud.callFunction({
    name: 'getHouseDetail',
    data: {
      _id: _id
    }
  }).then(result => {
    houseDetail = result.result.data
  }).catch(err => {
    console.log(err)
  })
  return houseDetail
}

async function updateHouseOrderDate(_id, dateList){
  let houseDetail = await getHouseDetail(_id)
  let updateList = houseDetail.orderedDate || []

  dateList.forEach(date => {
    updateList.indexOf(date) == -1 && updateList.push(date)
  });

  await wx.cloud.callFunction({
    name: 'updateHouseOrderDate',
    data: {
      _id: _id,
      dateList: updateList
    }
  })
}

module.exports = {
  getHouseList,
  getHouseDetail,
  updateHouseOrderDate
}