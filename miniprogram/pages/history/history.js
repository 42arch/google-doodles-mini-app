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
        data: []
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var doodles, groupData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, api_1.getHistoryOfToday()];
                    case 1:
                        doodles = _a.sent();
                        groupData = this.groupDataByYear(doodles);
                        this.setData({
                            data: groupData
                        });
                        return [2];
                }
            });
        });
    },
    groupDataByYear: function (doodles) {
        var keys = [];
        var newData = [];
        doodles.forEach(function (doodle) {
            if (!keys.includes(doodle.date_year.toString())) {
                newData.push({
                    year: doodle.date_year,
                    list: [doodle]
                });
                keys.push(doodle.date_year.toString());
            }
            else {
                newData.forEach(function (item) {
                    if (item.year == doodle.date_year) {
                        item.list.push(doodle);
                    }
                });
            }
        });
        return newData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBbUQ7QUFHbkQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQXdDO0tBQy9DO0lBS0ssTUFBTTs7Ozs7NEJBQ0ksV0FBTSx1QkFBaUIsRUFBRSxFQUFBOzt3QkFBbkMsT0FBTyxHQUFHLFNBQXlCO3dCQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxJQUFJLEVBQUUsU0FBUzt5QkFDaEIsQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUQsZUFBZSxFQUFmLFVBQWdCLE9BQWlCO1FBQy9CLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQTtRQUNwQixJQUFJLE9BQU8sR0FBcUMsRUFBRSxDQUFBO1FBRWxELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQ3BCLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVM7b0JBQ3RCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDZixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ2xCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtxQkFDdkI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8ge3twYWdlfX0udHNcbmltcG9ydCB7IGdldEhpc3RvcnlPZlRvZGF5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5pbXBvcnQgeyBEb29kbGUgfSBmcm9tIFwiLi4vLi4vdHlwZS9Eb29kbGUudHlwZVwiXG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBkYXRhOiBbXSBhcyB7IHllYXI6IG51bWJlciwgbGlzdDogRG9vZGxlW10gfVtdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IGRvb2RsZXMgPSBhd2FpdCBnZXRIaXN0b3J5T2ZUb2RheSgpXG4gICAgbGV0IGdyb3VwRGF0YSA9IHRoaXMuZ3JvdXBEYXRhQnlZZWFyKGRvb2RsZXMpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRhdGE6IGdyb3VwRGF0YVxuICAgIH0pXG4gIH0sXG5cbiAgZ3JvdXBEYXRhQnlZZWFyKGRvb2RsZXM6IERvb2RsZVtdKToge3llYXI6IG51bWJlciwgbGlzdDogRG9vZGxlW119W10ge1xuICAgIGxldCBrZXlzOiBhbnlbXSA9IFtdXG4gICAgbGV0IG5ld0RhdGE6IHt5ZWFyOiBudW1iZXIsIGxpc3Q6IERvb2RsZVtdfVtdID0gW11cblxuICAgIGRvb2RsZXMuZm9yRWFjaChkb29kbGUgPT4ge1xuICAgICAgaWYoIWtleXMuaW5jbHVkZXMoZG9vZGxlLmRhdGVfeWVhci50b1N0cmluZygpKSkge1xuICAgICAgICBuZXdEYXRhLnB1c2goe1xuICAgICAgICAgIHllYXI6IGRvb2RsZS5kYXRlX3llYXIsXG4gICAgICAgICAgbGlzdDogW2Rvb2RsZV1cbiAgICAgICAgfSlcbiAgICAgICAga2V5cy5wdXNoKGRvb2RsZS5kYXRlX3llYXIudG9TdHJpbmcoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZihpdGVtLnllYXIgPT0gZG9vZGxlLmRhdGVfeWVhcikge1xuICAgICAgICAgICAgaXRlbS5saXN0LnB1c2goZG9vZGxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBuZXdEYXRhXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19