import { Doodle } from "../../type/Doodle.type"
import { getAllDoodles, getCountOfDoodles } from "../../utils/api"

// {{page}}.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countNumber: 0,
    pageSize: 10,
    currentPage: 1,

    allDoodles: [] as Doodle[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let countNumber = await getCountOfDoodles()
    this.setData({
      countNumber: countNumber
    })

    let allDoodles = await getAllDoodles(this.data.pageSize, this.data.currentPage, '0', 'desc')

    console.log(66, allDoodles)

    this.setData({
      allDoodles: allDoodles
    })
  },
  // 加载更多
  async loadMore() {
    this.setData({
      currentPage : this.data.currentPage + 1
    })
    let moreDoodles = await getAllDoodles(this.data.pageSize, this.data.currentPage, '0', 'desc')

    console.log('more', moreDoodles)
    this.setData({
      allDoodles : this.data.allDoodles.concat(moreDoodles)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})