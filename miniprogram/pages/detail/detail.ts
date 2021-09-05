import { Doodle } from "../../type/Doodle.type"
import { getDetailById } from "../../utils/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    doodle_id: '' as string,
    doodle_info: {} as Doodle,
    doodle_tags: [] as string[],
    doodle_title_en: '' as string,
    clickMoreCountries: '' as string,
    allCountries: [] as string[],
    regions_show: false,
    blog_show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      doodle_id: options.id
    })

    let doodleInfo: Doodle = await getDetailById(this.data.doodle_id)
    this.setData({
      doodle_info: doodleInfo,
    })
    console.log(doodleInfo)

    let doodleTitleEn = doodleInfo['name'].replaceAll('-', ' ').toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase())
    console.log(899, doodleTitleEn)
    this.setData({
      doodle_title_en: doodleTitleEn
    })

    let doodleTags = doodleInfo['tags'].split(',')
    this.setData({
      doodle_tags: doodleTags
    })

    let countriesStr = doodleInfo['countries']    
    let allCountries = countriesStr.split(',')
    this.setData({
      allCountries: allCountries
    })
    let clickMoreCountries = allCountries.splice(0, 3).toString() + ' 等'
    this.setData({
      clickMoreCountries: clickMoreCountries
    })
  },

  // 展示全部地区弹框
  showFullRegions() {
    this.setData({
      regions_show: true
    })
  },

  onRegionsClose() {
    this.setData({
      regions_show: false
    })
  },

  showFullBlog() {
    this.setData({
      blog_show: true
    })
  },

  onBlogClose() {
    this.setData({
      blog_show: false
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