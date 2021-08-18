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
Page({
    data: {
        dateNow: "",
        doodlesOfToday: [],
        actionShow: false,
        actions: [
            { name: '历史上的今天', id: 'history' },
            { name: '涂鸦存档', id: 'archive' },
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
            var dateNow, doodlesOfToday;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateNow = this.getDateNow();
                        this.setData({
                            dateNow: dateNow
                        });
                        return [4, api_1.getDoodlesOfToday()];
                    case 1:
                        doodlesOfToday = _a.sent();
                        this.setData({
                            doodlesOfToday: doodlesOfToday,
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
        switch (e.detail.id) {
            case "archive":
                wx.navigateTo({ url: '/pages/archive/archive' });
                this.closeAction();
                break;
            case "history":
                wx.navigateTo({ url: '/pages/history/history' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFtRDtBQUtuRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxFQUFjO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1NBR2hDO1FBRUQsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztLQUN6RztJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNLLE1BQU0sRUFBWjs7Ozs7O3dCQUNNLE9BQU8sR0FBVSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsT0FBTyxFQUFFLE9BQU87eUJBQ2pCLENBQUMsQ0FBQTt3QkFDNkIsV0FBTSx1QkFBaUIsRUFBRSxFQUFBOzt3QkFBcEQsY0FBYyxHQUFhLFNBQXlCO3dCQUV4RCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGNBQWMsRUFBRSxjQUFjO3lCQUMvQixDQUFDLENBQUE7Ozs7O0tBQ0g7SUFFRCxVQUFVLEVBQVY7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QixPQUFVLElBQUksY0FBSSxLQUFLLGNBQUksR0FBRyxXQUFHLENBQUE7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWE7SUFFYixDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsQ0FBSztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNuQixLQUFLLFNBQVM7Z0JBQ1osRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBQyxDQUFDLENBQUE7Z0JBQzlDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDbEIsTUFBSztZQUNQLEtBQUssU0FBUztnQkFDWixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFDLENBQUMsQ0FBQTtnQkFDOUMsTUFBSztZQUNQO2dCQUNFLE1BQUs7U0FDUjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQWQsaUJBWUM7UUFWQyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5pbXBvcnQgeyBEb29kbGUgfSBmcm9tIFwiLi4vLi4vdHlwZS9Eb29kbGUudHlwZVwiXG5pbXBvcnQgeyBnZXREb29kbGVzT2ZUb2RheSB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxuXG4vLyDojrflj5blupTnlKjlrp7kvotcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxhbnk+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRlTm93OiBcIlwiLFxuICAgIGRvb2RsZXNPZlRvZGF5OiBbXSBhcyBEb29kbGVbXSxcbiAgICBhY3Rpb25TaG93OiBmYWxzZSxcbiAgICBhY3Rpb25zOiBbXG4gICAgICB7IG5hbWU6ICfljoblj7LkuIrnmoTku4rlpKknLCBpZDogJ2hpc3RvcnknIH0sXG4gICAgICB7IG5hbWU6ICfmtoLpuKblrZjmoaMnLCBpZDogJ2FyY2hpdmUnIH0sXG4gICAgICAvLyB7IG5hbWU6ICfnsr7pgIknIH0sXG4gICAgICAvLyB7IG5hbWU6ICfpmo/mnLonIH1cbiAgICBdLFxuXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiBmYWxzZSxcbiAgICBjYW5JVXNlT3BlbkRhdGE6IHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJiB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSAvLyDlpoLpnIDlsJ3or5Xojrflj5bnlKjmiLfkv6Hmga/lj6/mlLnkuLpmYWxzZVxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgIH0pXG4gIH0sXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgZGF0ZU5vdzpzdHJpbmcgPSB0aGlzLmdldERhdGVOb3coKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkYXRlTm93OiBkYXRlTm93XG4gICAgfSlcbiAgICBsZXQgZG9vZGxlc09mVG9kYXk6IERvb2RsZVtdID0gYXdhaXQgZ2V0RG9vZGxlc09mVG9kYXkoKVxuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRvb2RsZXNPZlRvZGF5OiBkb29kbGVzT2ZUb2RheSxcbiAgICB9KVxuICB9LFxuXG4gIGdldERhdGVOb3coKTogc3RyaW5nIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICByZXR1cm4gYCR7eWVhcn3lubQke21vbnRofeaciCR7ZGF5feaXpWBcbiAgfSxcblxuICBzaG93QWN0aW9uKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhY3Rpb25TaG93OiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBjbG9zZUFjdGlvbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aW9uU2hvdzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIG9uQWN0aW9uQ2xvc2UoKSB7XG5cbiAgfSxcblxuICBvbkFjdGlvblNlbGVjdChlOmFueSkge1xuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLm5hbWUpXG4gICAgc3dpdGNoIChlLmRldGFpbC5pZCkge1xuICAgICAgY2FzZSBcImFyY2hpdmVcIjpcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiAnL3BhZ2VzL2FyY2hpdmUvYXJjaGl2ZSd9KVxuICAgICAgICB0aGlzLmNsb3NlQWN0aW9uKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJoaXN0b3J5XCI6XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9oaXN0b3J5L2hpc3RvcnknfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9LFxuXG4gIGdldFVzZXJQcm9maWxlKCkge1xuICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6k77yM5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIC8vIOS4jeaOqOiNkOS9v+eUqGdldFVzZXJJbmZv6I635Y+W55So5oi35L+h5oGv77yM6aKE6K6h6IeqMjAyMeW5tDTmnIgxM+aXpei1t++8jGdldFVzZXJJbmZv5bCG5LiN5YaN5by55Ye65by556qX77yM5bm255u05o6l6L+U5Zue5Yy/5ZCN55qE55So5oi35Liq5Lq65L+h5oGvXG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICB9KVxuICB9XG59KVxuIl19