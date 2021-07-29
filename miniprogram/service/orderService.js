import { updateHouseOrderDate } from './houseService'

async function addOrder(orderParam){
  let addOrderResult = await wx.cloud.callFunction({
    name: 'addOrder',
    data: {
      orderParam: orderParam
    }
  })

  await updateHouseOrderDate(orderParam.houseId, orderParam.orderDate)

  console.log(addOrderResult)
  return addOrderResult.result
}

module.exports = {
  addOrder
}