// components/facilityServices/facilityServices.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    facilityServicesData: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    showMoreButton: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapMore() {
      this.triggerEvent('tapMore');
    },
  }
})
