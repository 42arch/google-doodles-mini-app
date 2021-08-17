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
    order: "desc",
    datePickerShow: false,
    datePicked: "",
    startDate: {},

    filterActionShow: false,
    filterAction: [
      { code: 'order', name: '正序排列' },
      { code: 'startDate', name: '起始日期' },
    ],

    currentDate: new Date().getTime(),
    minDate: new Date(1999, 10, 31).getTime(),
    maxDate: new Date().getTime(),
    formatter(type: string, value: string) {
      if (type === 'year') {
        return `${value}年`
      }
      if (type === 'month') {
        return `${value}月`
      }
      return value
    },

    allDoodles: [] as Doodle[]
  },

  onDateConfirm(e: any) {
    console.log('选中日期', e.detail)
    let date = new Date(e.detail)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let startDate = {
      year: year,
      month: month,
      day: day
    }
    console.log(startDate)
    this.setData({
      startDate: startDate
    })
    this.reset(startDate)

    this.onCancel()
  },

  onCancel() {
    this.setData({
      datePickerShow: false
    })
  },

  onClickHide() {
    this.onCancel()
  },

  onInput(e: any) {
    console.log('datetime', e)
    this.setData({
      currentDate: e.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let dateNow = new Date()
    let startDate = {
      year: dateNow.getFullYear(),
      month: dateNow.getMonth() + 1,
      day: dateNow.getDate()
    }
    this.setData({
      startDate: startDate
    })
    let countNumber = await getCountOfDoodles()
    this.setData({
      countNumber: countNumber
    })

    let allDoodles = await getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, this.data.startDate)

    this.setData({
      allDoodles: allDoodles
    })
  },
  // 加载更多
  async loadMore() {
    this.setData({
      currentPage : this.data.currentPage + 1
    })
    let moreDoodles = await getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, this.data.startDate)
    this.setData({
      allDoodles : this.data.allDoodles.concat(moreDoodles)
    })
  },

  filterShow(): void {
    this.setData({
      filterActionShow: true
    })
  },

  onActionClose() {

  },

  onActionSelect(e: any): void {
    switch (e.detail.code) {
      case 'order':
        if(e.detail.name === '倒序排列') {
          this.setData({
            order: "desc",
            filterAction : [
              { code: 'order', name: '正序排列' },
              { code: 'startDate', name: '起始日期' },
            ]
          })
        } else {
          this.setData({
            order: "asc",
            filterAction : [
              { code: 'order', name: '倒序排列' },
              { code: 'startDate', name: '起始日期' },
            ]
          })
        }
        this.reset()

        this.closeAction()
        break

      case 'startDate': 
        this.setData({
          datePickerShow: true
        })
        this.closeAction()
        break
      default:
        break
    }
  },

  closeAction() {
    this.setData({
      filterActionShow: false
    })
  },

  async reset(startDate?: object) {
    this.setData({
      pageSize: 10,
      currentPage: 1,
      allDoodles: [],
      startDate: startDate
    })

    let allDoodles = await getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, startDate)
    this.setData({
      allDoodles: allDoodles
    })
    
  },

  back2Top(): void {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})