// index.ts
import { Doodle } from "../../type/Doodle.type"
import { getDoodlesOfToday } from "../../utils/api"

// 获取应用实例
// const app = getApp<any>()

Page({
  data: {
    dateNow: "",
    doodlesOfToday: [] as Doodle[],
    actionShow: false,
    actions: [
      { name: '去年今日' },
      { name: '归档' },
      // { name: '精选' },
      // { name: '随机' }
    ],

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  async onLoad() {
    let dateNow:string = this.getDateNow()
    this.setData({
      dateNow: dateNow
    })
    let doodlesOfToday: Doodle[] = await getDoodlesOfToday()

    this.setData({
      doodlesOfToday: doodlesOfToday,
    })
  },

  getDateNow(): string {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${year}年${month}月${day}日`
  },

  showAction() {
    this.setData({
      actionShow: true
    })
  },

  closeAction() {
    this.setData({
      actionShow: false
    })
  },

  onActionClose() {

  },

  onActionSelect(e:any) {
    console.log(e.detail.name)
    switch (e.detail.name) {
      case "归档":
        wx.navigateTo({url: '/pages/archive/archive'})
        this.closeAction()
        break
      default:
        break
    }
  },

  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
