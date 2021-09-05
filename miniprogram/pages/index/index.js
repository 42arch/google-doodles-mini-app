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
            { name: '关于', id: 'about' }
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
    },
    goToDetail: function (e) {
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
            url: "/pages/detail/detail?id=" + e.currentTarget.dataset.id
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
                this.closeAction();
                break;
            case "about":
                wx.navigateTo({ url: '/pages/about/about' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFtRDtBQUtuRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxFQUFjO1FBQzlCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRTtZQUNQLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBRzVCO1FBRUQsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztLQUN6RztJQU9ELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNkJBQTJCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUk7U0FDN0QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNLLE1BQU0sRUFBWjs7Ozs7O3dCQUNNLE9BQU8sR0FBVSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsT0FBTyxFQUFFLE9BQU87eUJBQ2pCLENBQUMsQ0FBQTt3QkFDNkIsV0FBTSx1QkFBaUIsRUFBRSxFQUFBOzt3QkFBcEQsY0FBYyxHQUFhLFNBQXlCO3dCQUV4RCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGNBQWMsRUFBRSxjQUFjO3lCQUMvQixDQUFDLENBQUE7Ozs7O0tBQ0g7SUFFRCxVQUFVLEVBQVY7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QixPQUFVLElBQUksY0FBSSxLQUFLLGNBQUksR0FBRyxXQUFHLENBQUE7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWE7SUFFYixDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsQ0FBSztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNuQixLQUFLLFNBQVM7Z0JBQ1osRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBQyxDQUFDLENBQUE7Z0JBQzlDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDbEIsTUFBSztZQUNQLEtBQUssU0FBUztnQkFDWixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFDLENBQUMsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNsQixNQUFLO1lBQ1AsS0FBSyxPQUFPO2dCQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xCLE1BQUs7WUFDUDtnQkFDRSxNQUFLO1NBQ1I7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUFkLGlCQVlDO1FBVkMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uLy4uL3R5cGUvRG9vZGxlLnR5cGVcIlxuaW1wb3J0IHsgZ2V0RG9vZGxlc09mVG9kYXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8YW55PigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0ZU5vdzogXCJcIixcbiAgICBkb29kbGVzT2ZUb2RheTogW10gYXMgRG9vZGxlW10sXG4gICAgYWN0aW9uU2hvdzogZmFsc2UsXG4gICAgYWN0aW9uczogW1xuICAgICAgeyBuYW1lOiAn5Y6G5Y+y5LiK55qE5LuK5aSpJywgaWQ6ICdoaXN0b3J5JyB9LFxuICAgICAgeyBuYW1lOiAn5raC6bim5a2Y5qGjJywgaWQ6ICdhcmNoaXZlJyB9LFxuICAgICAgeyBuYW1lOiAn5YWz5LqOJywgaWQ6ICdhYm91dCcgfVxuICAgICAgLy8geyBuYW1lOiAn57K+6YCJJyB9LFxuICAgICAgLy8geyBuYW1lOiAn6ZqP5py6JyB9XG4gICAgXSxcblxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOiB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyQXZhdGFyVXJsJykgJiYgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJykgLy8g5aaC6ZyA5bCd6K+V6I635Y+W55So5oi35L+h5oGv5Y+v5pS55Li6ZmFsc2VcbiAgfSxcbiAgLy8gLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIC8vIGJpbmRWaWV3VGFwKCkge1xuICAvLyAgIHd4Lm5hdmlnYXRlVG8oe1xuICAvLyAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgLy8gICB9KVxuICAvLyB9LFxuICBnb1RvRGV0YWlsKGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL2RldGFpbC9kZXRhaWw/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgfSlcbiAgfSxcbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBkYXRlTm93OnN0cmluZyA9IHRoaXMuZ2V0RGF0ZU5vdygpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRhdGVOb3c6IGRhdGVOb3dcbiAgICB9KVxuICAgIGxldCBkb29kbGVzT2ZUb2RheTogRG9vZGxlW10gPSBhd2FpdCBnZXREb29kbGVzT2ZUb2RheSgpXG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZG9vZGxlc09mVG9kYXk6IGRvb2RsZXNPZlRvZGF5LFxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0RGF0ZU5vdygpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIHJldHVybiBgJHt5ZWFyfeW5tCR7bW9udGh95pyIJHtkYXl95pelYFxuICB9LFxuXG4gIHNob3dBY3Rpb24oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFjdGlvblNob3c6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGNsb3NlQWN0aW9uKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhY3Rpb25TaG93OiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgb25BY3Rpb25DbG9zZSgpIHtcblxuICB9LFxuXG4gIG9uQWN0aW9uU2VsZWN0KGU6YW55KSB7XG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwubmFtZSlcbiAgICBzd2l0Y2ggKGUuZGV0YWlsLmlkKSB7XG4gICAgICBjYXNlIFwiYXJjaGl2ZVwiOlxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvYXJjaGl2ZS9hcmNoaXZlJ30pXG4gICAgICAgIHRoaXMuY2xvc2VBY3Rpb24oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImhpc3RvcnlcIjpcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiAnL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeSd9KVxuICAgICAgICB0aGlzLmNsb3NlQWN0aW9uKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJhYm91dFwiOlxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvYWJvdXQvYWJvdXQnfSlcbiAgICAgICAgdGhpcy5jbG9zZUFjdGlvbigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSxcblxuICBnZXRVc2VyUHJvZmlsZSgpIHtcbiAgICAvLyDmjqjojZDkvb/nlKh3eC5nZXRVc2VyUHJvZmlsZeiOt+WPlueUqOaIt+S/oeaBr++8jOW8gOWPkeiAheavj+asoemAmui/h+ivpeaOpeWPo+iOt+WPlueUqOaIt+S4quS6uuS/oeaBr+Wdh+mcgOeUqOaIt+ehruiupO+8jOW8gOWPkeiAheWmpeWWhOS/neeuoeeUqOaIt+W/q+mAn+Whq+WGmeeahOWktOWDj+aYteensO+8jOmBv+WFjemHjeWkjeW8ueeql1xuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgIGRlc2M6ICflsZXnpLrnlKjmiLfkv6Hmga8nLCAvLyDlo7DmmI7ojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lkI7nmoTnlKjpgJTvvIzlkI7nu63kvJrlsZXnpLrlnKjlvLnnqpfkuK3vvIzor7fosKjmhY7loavlhplcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICAvLyDkuI3mjqjojZDkvb/nlKhnZXRVc2VySW5mb+iOt+WPlueUqOaIt+S/oeaBr++8jOmihOiuoeiHqjIwMjHlubQ05pyIMTPml6XotbfvvIxnZXRVc2VySW5mb+WwhuS4jeWGjeW8ueWHuuW8ueeql++8jOW5tuebtOaOpei/lOWbnuWMv+WQjeeahOeUqOaIt+S4quS6uuS/oeaBr1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==