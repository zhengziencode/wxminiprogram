// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sth:"hello world",
    array:[{msg:"hi this is msg one"},{msg:"hi this is msg two"}],
    normalData:"This is normal data",//对应{{normalData}}
    arrayData:[{text:"this is array data"}],//对应{{arrayData[0].text}}
    obj:{//对应{{obj.data}}
      //类对象用{}大括号
      data:"This is object inited text"   //data是类obj的一个成员
    }

  },

  changeData: function () {//这个方法是在绑定bindtap之后成为Page类的一个成员
  //不能直接用this.data.normalData="abc"
    this.setData({
      normalData: "normal data has changed"
    })
  },
  changeArrayData: function () {
    this.setData({
      'arrayData[0].text': "changed"//注意这里用的左边不是从新定义数组
    })
  },
  changeobjData:function(){
    this.setData({
      'obj.data':"obj data changed"
    })
  },
  addNewField:function(){
    this.setData({
      'newField.text':"i also changed"
    })
  },
  tapMe:function(){
    console.log("yo clicked me!")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})