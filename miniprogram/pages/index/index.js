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
            { name: '去年今日' },
            { name: '归档' },
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
        switch (e.detail.name) {
            case "归档":
                wx.navigateTo({ url: '/pages/archive/archive' });
                this.closeAction();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFtRDtBQUtuRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxFQUFjO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUNoQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7U0FHZjtRQUVELFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDekc7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSyxNQUFNLEVBQVo7Ozs7Ozt3QkFDTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLE9BQU8sRUFBRSxPQUFPO3lCQUNqQixDQUFDLENBQUE7d0JBQzZCLFdBQU0sdUJBQWlCLEVBQUUsRUFBQTs7d0JBQXBELGNBQWMsR0FBYSxTQUF5Qjt3QkFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxjQUFjLEVBQUUsY0FBYzt5QkFDL0IsQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDeEIsT0FBVSxJQUFJLGNBQUksS0FBSyxjQUFJLEdBQUcsV0FBRyxDQUFBO0lBQ25DLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxhQUFhO0lBRWIsQ0FBQztJQUVELGNBQWMsRUFBZCxVQUFlLENBQUs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckIsS0FBSyxJQUFJO2dCQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyxDQUFBO2dCQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xCLE1BQUs7WUFDUDtnQkFDRSxNQUFLO1NBQ1I7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUFkLGlCQVlDO1FBVkMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uLy4uL3R5cGUvRG9vZGxlLnR5cGVcIlxuaW1wb3J0IHsgZ2V0RG9vZGxlc09mVG9kYXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8YW55PigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0ZU5vdzogXCJcIixcbiAgICBkb29kbGVzT2ZUb2RheTogW10gYXMgRG9vZGxlW10sXG4gICAgYWN0aW9uU2hvdzogZmFsc2UsXG4gICAgYWN0aW9uczogW1xuICAgICAgeyBuYW1lOiAn5Y675bm05LuK5pelJyB9LFxuICAgICAgeyBuYW1lOiAn5b2S5qGjJyB9LFxuICAgICAgLy8geyBuYW1lOiAn57K+6YCJJyB9LFxuICAgICAgLy8geyBuYW1lOiAn6ZqP5py6JyB9XG4gICAgXSxcblxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOiB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyQXZhdGFyVXJsJykgJiYgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJykgLy8g5aaC6ZyA5bCd6K+V6I635Y+W55So5oi35L+h5oGv5Y+v5pS55Li6ZmFsc2VcbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IGRhdGVOb3c6c3RyaW5nID0gdGhpcy5nZXREYXRlTm93KClcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZGF0ZU5vdzogZGF0ZU5vd1xuICAgIH0pXG4gICAgbGV0IGRvb2RsZXNPZlRvZGF5OiBEb29kbGVbXSA9IGF3YWl0IGdldERvb2RsZXNPZlRvZGF5KClcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkb29kbGVzT2ZUb2RheTogZG9vZGxlc09mVG9kYXksXG4gICAgfSlcbiAgfSxcblxuICBnZXREYXRlTm93KCk6IHN0cmluZyB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgcmV0dXJuIGAke3llYXJ95bm0JHttb250aH3mnIgke2RheX3ml6VgXG4gIH0sXG5cbiAgc2hvd0FjdGlvbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aW9uU2hvdzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgY2xvc2VBY3Rpb24oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFjdGlvblNob3c6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvbkFjdGlvbkNsb3NlKCkge1xuXG4gIH0sXG5cbiAgb25BY3Rpb25TZWxlY3QoZTphbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5uYW1lKVxuICAgIHN3aXRjaCAoZS5kZXRhaWwubmFtZSkge1xuICAgICAgY2FzZSBcIuW9kuaho1wiOlxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvYXJjaGl2ZS9hcmNoaXZlJ30pXG4gICAgICAgIHRoaXMuY2xvc2VBY3Rpb24oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VXNlclByb2ZpbGUoKSB7XG4gICAgLy8g5o6o6I2Q5L2/55Sod3guZ2V0VXNlclByb2ZpbGXojrflj5bnlKjmiLfkv6Hmga/vvIzlvIDlj5HogIXmr4/mrKHpgJrov4for6XmjqXlj6Pojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lnYfpnIDnlKjmiLfnoa7orqTvvIzlvIDlj5HogIXlpqXlloTkv53nrqHnlKjmiLflv6vpgJ/loavlhpnnmoTlpLTlg4/mmLXnp7DvvIzpgb/lhY3ph43lpI3lvLnnqpdcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XG4gICAgICBkZXNjOiAn5bGV56S655So5oi35L+h5oGvJywgLy8g5aOw5piO6I635Y+W55So5oi35Liq5Lq65L+h5oGv5ZCO55qE55So6YCU77yM5ZCO57ut5Lya5bGV56S65Zyo5by556qX5Lit77yM6K+36LCo5oWO5aGr5YaZXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgLy8g5LiN5o6o6I2Q5L2/55SoZ2V0VXNlckluZm/ojrflj5bnlKjmiLfkv6Hmga/vvIzpooTorqHoh6oyMDIx5bm0NOaciDEz5pel6LW377yMZ2V0VXNlckluZm/lsIbkuI3lho3lvLnlh7rlvLnnqpfvvIzlubbnm7TmjqXov5Tlm57ljL/lkI3nmoTnlKjmiLfkuKrkurrkv6Hmga9cbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=