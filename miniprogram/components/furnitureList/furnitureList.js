// components/furnitureList/furnitureList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listData: [{
      icon: 'beds',
      list: [{
        name: '双人床 1.5m*2m',
        count: 1,
        unit: '张'
      },{
        name: '双人床 1.8m*2m',
        count: 1,
        unit: '张'
      }]
    },{
      icon: 'bed',
      list: [{
        name: '单人床 1.2m*2m',
        count: 1,
        unit: '张'
      }]
    },{
      icon: 'bed',
      list: [{
        name: '榻榻米 1.2m*2m',
        count: 1,
        unit: '张'
      }]
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
