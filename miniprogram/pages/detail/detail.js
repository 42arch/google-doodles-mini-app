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
        doodle_id: '',
        doodle_info: {},
        doodle_tags: [],
        doodle_title_en: '',
        clickMoreCountries: '',
        allCountries: [],
        regions_show: false,
        blog_show: false
    },
    onLoad: function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var doodleInfo, doodleTitleEn, doodleTags, countriesStr, allCountries, clickMoreCountries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            doodle_id: options.id
                        });
                        return [4, api_1.getDetailById(this.data.doodle_id)];
                    case 1:
                        doodleInfo = _a.sent();
                        this.setData({
                            doodle_info: doodleInfo,
                        });
                        console.log(doodleInfo);
                        doodleTitleEn = doodleInfo['name'].replaceAll('-', ' ').toLowerCase().replace(/( |^)[a-z]/g, function (L) { return L.toUpperCase(); });
                        console.log(899, doodleTitleEn);
                        this.setData({
                            doodle_title_en: doodleTitleEn
                        });
                        doodleTags = doodleInfo['tags'].split(',');
                        this.setData({
                            doodle_tags: doodleTags
                        });
                        countriesStr = doodleInfo['countries'];
                        allCountries = countriesStr.split(',');
                        this.setData({
                            allCountries: allCountries
                        });
                        clickMoreCountries = allCountries.splice(0, 3).toString() + ' 等';
                        this.setData({
                            clickMoreCountries: clickMoreCountries
                        });
                        return [2];
                }
            });
        });
    },
    showFullRegions: function () {
        this.setData({
            regions_show: true
        });
    },
    onRegionsClose: function () {
        this.setData({
            regions_show: false
        });
    },
    showFullBlog: function () {
        this.setData({
            blog_show: true
        });
    },
    onBlogClose: function () {
        this.setData({
            blog_show: false
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQStDO0FBRS9DLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxFQUFZO1FBQ3ZCLFdBQVcsRUFBRSxFQUFZO1FBQ3pCLFdBQVcsRUFBRSxFQUFjO1FBQzNCLGVBQWUsRUFBRSxFQUFZO1FBQzdCLGtCQUFrQixFQUFFLEVBQVk7UUFDaEMsWUFBWSxFQUFFLEVBQWM7UUFDNUIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFLSyxNQUFNLEVBQVosVUFBYSxPQUFPOzs7Ozs7d0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO3lCQUN0QixDQUFDLENBQUE7d0JBRXVCLFdBQU0sbUJBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBN0QsVUFBVSxHQUFXLFNBQXdDO3dCQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFdBQVcsRUFBRSxVQUFVO3lCQUN4QixDQUFDLENBQUE7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTt3QkFFbkIsYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsVUFBQyxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7d0JBQ3JILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO3dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGVBQWUsRUFBRSxhQUFhO3lCQUMvQixDQUFDLENBQUE7d0JBRUUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLFVBQVU7eUJBQ3hCLENBQUMsQ0FBQTt3QkFFRSxZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO3dCQUN0QyxZQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxZQUFZLEVBQUUsWUFBWTt5QkFDM0IsQ0FBQyxDQUFBO3dCQUNFLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQTt3QkFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxrQkFBa0IsRUFBRSxrQkFBa0I7eUJBQ3ZDLENBQUMsQ0FBQTs7Ozs7S0FDSDtJQUdELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uLy4uL3R5cGUvRG9vZGxlLnR5cGVcIlxuaW1wb3J0IHsgZ2V0RGV0YWlsQnlJZCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZG9vZGxlX2lkOiAnJyBhcyBzdHJpbmcsXG4gICAgZG9vZGxlX2luZm86IHt9IGFzIERvb2RsZSxcbiAgICBkb29kbGVfdGFnczogW10gYXMgc3RyaW5nW10sXG4gICAgZG9vZGxlX3RpdGxlX2VuOiAnJyBhcyBzdHJpbmcsXG4gICAgY2xpY2tNb3JlQ291bnRyaWVzOiAnJyBhcyBzdHJpbmcsXG4gICAgYWxsQ291bnRyaWVzOiBbXSBhcyBzdHJpbmdbXSxcbiAgICByZWdpb25zX3Nob3c6IGZhbHNlLFxuICAgIGJsb2dfc2hvdzogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRvb2RsZV9pZDogb3B0aW9ucy5pZFxuICAgIH0pXG5cbiAgICBsZXQgZG9vZGxlSW5mbzogRG9vZGxlID0gYXdhaXQgZ2V0RGV0YWlsQnlJZCh0aGlzLmRhdGEuZG9vZGxlX2lkKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkb29kbGVfaW5mbzogZG9vZGxlSW5mbyxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGRvb2RsZUluZm8pXG5cbiAgICBsZXQgZG9vZGxlVGl0bGVFbiA9IGRvb2RsZUluZm9bJ25hbWUnXS5yZXBsYWNlQWxsKCctJywgJyAnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyggfF4pW2Etel0vZywoTCk9PkwudG9VcHBlckNhc2UoKSlcbiAgICBjb25zb2xlLmxvZyg4OTksIGRvb2RsZVRpdGxlRW4pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRvb2RsZV90aXRsZV9lbjogZG9vZGxlVGl0bGVFblxuICAgIH0pXG5cbiAgICBsZXQgZG9vZGxlVGFncyA9IGRvb2RsZUluZm9bJ3RhZ3MnXS5zcGxpdCgnLCcpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRvb2RsZV90YWdzOiBkb29kbGVUYWdzXG4gICAgfSlcblxuICAgIGxldCBjb3VudHJpZXNTdHIgPSBkb29kbGVJbmZvWydjb3VudHJpZXMnXSAgICBcbiAgICBsZXQgYWxsQ291bnRyaWVzID0gY291bnRyaWVzU3RyLnNwbGl0KCcsJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWxsQ291bnRyaWVzOiBhbGxDb3VudHJpZXNcbiAgICB9KVxuICAgIGxldCBjbGlja01vcmVDb3VudHJpZXMgPSBhbGxDb3VudHJpZXMuc3BsaWNlKDAsIDMpLnRvU3RyaW5nKCkgKyAnIOetiSdcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY2xpY2tNb3JlQ291bnRyaWVzOiBjbGlja01vcmVDb3VudHJpZXNcbiAgICB9KVxuICB9LFxuXG4gIC8vIOWxleekuuWFqOmDqOWcsOWMuuW8ueahhlxuICBzaG93RnVsbFJlZ2lvbnMoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHJlZ2lvbnNfc2hvdzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgb25SZWdpb25zQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHJlZ2lvbnNfc2hvdzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIHNob3dGdWxsQmxvZygpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYmxvZ19zaG93OiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBvbkJsb2dDbG9zZSgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYmxvZ19zaG93OiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=