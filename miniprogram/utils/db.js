let DB = null
function getCloudDB(globalData) {
  if(DB) return DB
  DB = globalData.DB = wx.cloud.database()
  return globalData.DB
}

function getCollection(collectionName){
  return getCloudDB().collection(collectionName)
}

module.exports = {
  getCloudDB,
  getCollection
}