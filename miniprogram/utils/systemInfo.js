/**
 * 获取顶部导航栏的高度
 * @param {object} globalData 全局变量对象
 */
export function getSystemBarInfo(globalData){
  // 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
  let menuButtonObject = wx.getMenuButtonBoundingClientRect();
  wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,//状态栏的高度
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          menuButtonHeight = menuButtonObject.height,//胶囊按钮的高度
          navHeight = statusBarHeight + menuButtonHeight + (menuButtonObject.top - statusBarHeight)*2;//导航高度
        globalData.navHeight = navHeight;
        globalData.menuButtonHeight = menuButtonHeight;
        globalData.navTop = navTop;
        globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
}