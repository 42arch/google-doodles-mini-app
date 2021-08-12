"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
var app = getApp();
Page({
    data: {
        dateNow: "",
        doodlesOfToday: [],
        actionShow: false,
        actions: [
            { name: '去年今日' },
            { name: '归档' },
            { name: '精选' },
            { name: '随机' }
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var dateNow, doodlesOfToday, doodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateNow = this.getDateNow();
                        this.setData({
                            dateNow: dateNow
                        });
                        console.log(app);
                        return [4, api_1.getDoodlesOfToday()];
                    case 1:
                        doodlesOfToday = _a.sent();
                        return [4, api_1.getDoodleByMonth(2020, 10)];
                    case 2:
                        doodles = _a.sent();
                        console.log(88, doodles);
                        this.setData({
                            doodlesOfToday: doodlesOfToday,
                            test: "测试文字"
                        });
                        return [2];
                }
            });
        });
    },
    getDateNow: function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return year + "\u5E74" + month + "\u6708" + day + "\u65E5";
    },
    showAction: function () {
        this.setData({
            actionShow: true
        });
    },
    closeAction: function () {
        this.setData({
            actionShow: false
        });
    },
    onActionClose: function () {
    },
    onActionSelect: function (e) {
        console.log(e.detail.name);
        switch (e.detail.name) {
            case "归档":
                wx.navigateTo({ url: '/pages/archive/archive' });
                break;
            default:
                break;
        }
    },
    getUserProfile: function () {
        var _this = this;
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFxRTtBQUdyRSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQU8sQ0FBQTtBQUV6QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxFQUFjO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUNoQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7U0FDZjtRQUVELFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDekc7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSyxNQUFNLEVBQVo7Ozs7Ozt3QkFDTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLE9BQU8sRUFBRSxPQUFPO3lCQUNqQixDQUFDLENBQUE7d0JBT0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFHZSxXQUFNLHVCQUFpQixFQUFFLEVBQUE7O3dCQUFwRCxjQUFjLEdBQWEsU0FBeUI7d0JBRzFDLFdBQU0sc0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBMUMsT0FBTyxHQUFHLFNBQWdDO3dCQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxjQUFjLEVBQUUsY0FBYzs0QkFDOUIsSUFBSSxFQUFDLE1BQU07eUJBQ1osQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDeEIsT0FBVSxJQUFJLGNBQUksS0FBSyxjQUFJLEdBQUcsV0FBRyxDQUFBO0lBQ25DLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxhQUFhO0lBRWIsQ0FBQztJQUVELGNBQWMsRUFBZCxVQUFlLENBQUs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckIsS0FBSyxJQUFJO2dCQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyxDQUFBO2dCQUM5QyxNQUFNO1lBRVI7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFBZCxpQkFZQztRQVZDLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbmltcG9ydCB7IERvb2RsZSB9IGZyb20gXCIuLi8uLi90eXBlL0Rvb2RsZS50eXBlXCJcbmltcG9ydCB7IGdldERvb2RsZUJ5TW9udGgsIGdldERvb2RsZXNPZlRvZGF5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPGFueT4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGVOb3c6IFwiXCIsXG4gICAgZG9vZGxlc09mVG9kYXk6IFtdIGFzIERvb2RsZVtdLFxuICAgIGFjdGlvblNob3c6IGZhbHNlLFxuICAgIGFjdGlvbnM6IFtcbiAgICAgIHsgbmFtZTogJ+WOu+W5tOS7iuaXpScgfSxcbiAgICAgIHsgbmFtZTogJ+W9kuahoycgfSxcbiAgICAgIHsgbmFtZTogJ+eyvumAiScgfSxcbiAgICAgIHsgbmFtZTogJ+maj+acuicgfVxuICAgIF0sXG5cbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTogd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJOaWNrTmFtZScpIC8vIOWmgumcgOWwneivleiOt+WPlueUqOaIt+S/oeaBr+WPr+aUueS4umZhbHNlXG4gIH0sXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncycsXG4gICAgfSlcbiAgfSxcbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBkYXRlTm93OnN0cmluZyA9IHRoaXMuZ2V0RGF0ZU5vdygpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRhdGVOb3c6IGRhdGVOb3dcbiAgICB9KVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBpZiAod3guZ2V0VXNlclByb2ZpbGUpIHtcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogdHJ1ZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coYXBwKVxuXG5cbiAgICBsZXQgZG9vZGxlc09mVG9kYXk6IERvb2RsZVtdID0gYXdhaXQgZ2V0RG9vZGxlc09mVG9kYXkoKVxuICAgIC8vIGNvbnNvbGUubG9nKDk5LCBkb29kbGVzT2ZUb2RheSlcblxuICAgIGxldCBkb29kbGVzID0gYXdhaXQgZ2V0RG9vZGxlQnlNb250aCgyMDIwLCAxMClcbiAgICBjb25zb2xlLmxvZyg4OCwgZG9vZGxlcylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZG9vZGxlc09mVG9kYXk6IGRvb2RsZXNPZlRvZGF5LFxuICAgICAgdGVzdDpcIua1i+ivleaWh+Wtl1wiXG4gICAgfSlcbiAgfSxcblxuICBnZXREYXRlTm93KCk6IHN0cmluZyB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgcmV0dXJuIGAke3llYXJ95bm0JHttb250aH3mnIgke2RheX3ml6VgXG4gIH0sXG5cbiAgc2hvd0FjdGlvbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aW9uU2hvdzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgY2xvc2VBY3Rpb24oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFjdGlvblNob3c6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvbkFjdGlvbkNsb3NlKCkge1xuXG4gIH0sXG5cbiAgb25BY3Rpb25TZWxlY3QoZTphbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5uYW1lKVxuICAgIHN3aXRjaCAoZS5kZXRhaWwubmFtZSkge1xuICAgICAgY2FzZSBcIuW9kuaho1wiOlxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvYXJjaGl2ZS9hcmNoaXZlJ30pXG4gICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIGdldFVzZXJQcm9maWxlKCkge1xuICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6k77yM5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIC8vIOS4jeaOqOiNkOS9v+eUqGdldFVzZXJJbmZv6I635Y+W55So5oi35L+h5oGv77yM6aKE6K6h6IeqMjAyMeW5tDTmnIgxM+aXpei1t++8jGdldFVzZXJJbmZv5bCG5LiN5YaN5by55Ye65by556qX77yM5bm255u05o6l6L+U5Zue5Yy/5ZCN55qE55So5oi35Liq5Lq65L+h5oGvXG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICB9KVxuICB9XG59KVxuIl19