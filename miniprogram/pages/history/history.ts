// {{page}}.ts
import { getHistoryOfToday } from "../../utils/api"
import { Doodle } from "../../type/Doodle.type"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [] as { year: number, list: Doodle[] }[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let doodles = await getHistoryOfToday()
    let groupData = this.groupDataByYear(doodles)
    this.setData({
      data: groupData
    })
  },

  groupDataByYear(doodles: Doodle[]): {year: number, list: Doodle[]}[] {
    let keys: any[] = []
    let newData: {year: number, list: Doodle[]}[] = []

    doodles.forEach(doodle => {
      if(!keys.includes(doodle.date_year.toString())) {
        newData.push({
          year: doodle.date_year,
          list: [doodle]
        })
        keys.push(doodle.date_year.toString())
      } else {
        newData.forEach(item => {
          if(item.year == doodle.date_year) {
            item.list.push(doodle)
          }
        })
      }
    })
    return newData
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