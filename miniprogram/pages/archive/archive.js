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
        countNumber: 0,
        pageSize: 10,
        currentPage: 1,
        order: "desc",
        datePickerShow: false,
        datePicked: "",
        filterActionShow: false,
        filterAction: [
            { code: 'order', name: '正序排列' },
            { code: 'startDate', name: '起始日期' },
        ],
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        formatter: function (type, value) {
            if (type === 'year') {
                return value + "\u5E74";
            }
            if (type === 'month') {
                return value + "\u6708";
            }
            return value;
        },
        allDoodles: []
    },
    onDateConfirm: function (e) {
        console.log('选中日期', e.detail);
        var date = new Date(e.detail);
        console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
        this.onCancel();
    },
    onCancel: function () {
        this.setData({
            datePickerShow: false
        });
    },
    onInput: function (e) {
        console.log('datetime', e);
        this.setData({
            currentDate: e.detail,
        });
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var countNumber, allDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, api_1.getCountOfDoodles()];
                    case 1:
                        countNumber = _a.sent();
                        this.setData({
                            countNumber: countNumber
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order)];
                    case 2:
                        allDoodles = _a.sent();
                        this.setData({
                            allDoodles: allDoodles
                        });
                        return [2];
                }
            });
        });
    },
    loadMore: function () {
        return __awaiter(this, void 0, void 0, function () {
            var moreDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            currentPage: this.data.currentPage + 1
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order)];
                    case 1:
                        moreDoodles = _a.sent();
                        this.setData({
                            allDoodles: this.data.allDoodles.concat(moreDoodles)
                        });
                        return [2];
                }
            });
        });
    },
    filterShow: function () {
        this.setData({
            filterActionShow: true
        });
    },
    onActionClose: function () {
    },
    onActionSelect: function (e) {
        console.log(111, e.detail);
        switch (e.detail.code) {
            case 'order':
                if (e.detail.name === '倒序排列') {
                    this.setData({
                        order: "desc",
                        filterAction: [
                            { code: 'order', name: '正序排列' },
                            { code: 'startDate', name: '起始日期' },
                        ]
                    });
                }
                else {
                    this.setData({
                        order: "asc",
                        filterAction: [
                            { code: 'order', name: '倒序排列' },
                            { code: 'startDate', name: '起始日期' },
                        ]
                    });
                }
                this.reset();
                this.closeAction();
                break;
            case 'startDate':
                this.setData({
                    datePickerShow: true
                });
                this.closeAction();
                break;
            default:
                break;
        }
    },
    closeAction: function () {
        this.setData({
            filterActionShow: false
        });
    },
    reset: function () {
        return __awaiter(this, void 0, void 0, function () {
            var allDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            pageSize: 10,
                            currentPage: 1,
                            allDoodles: []
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order)];
                    case 1:
                        allDoodles = _a.sent();
                        this.setData({
                            allDoodles: allDoodles
                        });
                        return [2];
                }
            });
        });
    },
    back2Top: function () {
        if (wx.pageScrollTo) {
            wx.pageScrollTo({
                scrollTop: 0
            });
        }
        else {
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            });
        }
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
        this.loadMore();
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBa0U7QUFHbEUsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFFYixjQUFjLEVBQUUsS0FBSztRQUNyQixVQUFVLEVBQUUsRUFBRTtRQUVkLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsWUFBWSxFQUFFO1lBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7U0FDcEM7UUFFRCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDakMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQzdCLFNBQVMsRUFBVCxVQUFVLElBQVksRUFBRSxLQUFhO1lBQ25DLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbkIsT0FBVSxLQUFLLFdBQUcsQ0FBQzthQUNwQjtZQUNELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDcEIsT0FBVSxLQUFLLFdBQUcsQ0FBQzthQUNwQjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELFVBQVUsRUFBRSxFQUFjO0tBQzNCO0lBRUQsYUFBYSxFQUFiLFVBQWMsQ0FBTTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFB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QUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uLy4uL3R5cGUvRG9vZGxlLnR5cGVcIlxuaW1wb3J0IHsgZ2V0QWxsRG9vZGxlcywgZ2V0Q291bnRPZkRvb2RsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuLy8ge3twYWdlfX0udHNcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjb3VudE51bWJlcjogMCxcbiAgICBwYWdlU2l6ZTogMTAsXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgb3JkZXI6IFwiZGVzY1wiLFxuXG4gICAgZGF0ZVBpY2tlclNob3c6IGZhbHNlLFxuICAgIGRhdGVQaWNrZWQ6IFwiXCIsXG5cbiAgICBmaWx0ZXJBY3Rpb25TaG93OiBmYWxzZSxcbiAgICBmaWx0ZXJBY3Rpb246IFtcbiAgICAgIHsgY29kZTogJ29yZGVyJywgbmFtZTogJ+ato+W6j+aOkuWIlycgfSxcbiAgICAgIHsgY29kZTogJ3N0YXJ0RGF0ZScsIG5hbWU6ICfotbflp4vml6XmnJ8nIH0sXG4gICAgXSxcblxuICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBmb3JtYXR0ZXIodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZX3lubRgO1xuICAgICAgfSBcbiAgICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZX3mnIhgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBhbGxEb29kbGVzOiBbXSBhcyBEb29kbGVbXVxuICB9LFxuXG4gIG9uRGF0ZUNvbmZpcm0oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ+mAieS4reaXpeacnycsIGUuZGV0YWlsKVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZS5kZXRhaWwpXG4gICAgY29uc29sZS5sb2coZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSlcbiAgICB0aGlzLm9uQ2FuY2VsKClcbiAgfSxcblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZGF0ZVBpY2tlclNob3c6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBvbklucHV0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdkYXRldGltZScsIGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnREYXRlOiBlLmRldGFpbCxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IGNvdW50TnVtYmVyID0gYXdhaXQgZ2V0Q291bnRPZkRvb2RsZXMoKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb3VudE51bWJlcjogY291bnROdW1iZXJcbiAgICB9KVxuXG4gICAgbGV0IGFsbERvb2RsZXMgPSBhd2FpdCBnZXRBbGxEb29kbGVzKHRoaXMuZGF0YS5wYWdlU2l6ZSwgdGhpcy5kYXRhLmN1cnJlbnRQYWdlLCAnMCcsIHRoaXMuZGF0YS5vcmRlcilcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxEb29kbGVzOiBhbGxEb29kbGVzXG4gICAgfSlcbiAgfSxcbiAgLy8g5Yqg6L295pu05aSaXG4gIGFzeW5jIGxvYWRNb3JlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjdXJyZW50UGFnZSA6IHRoaXMuZGF0YS5jdXJyZW50UGFnZSArIDFcbiAgICB9KVxuICAgIGxldCBtb3JlRG9vZGxlcyA9IGF3YWl0IGdldEFsbERvb2RsZXModGhpcy5kYXRhLnBhZ2VTaXplLCB0aGlzLmRhdGEuY3VycmVudFBhZ2UsICcwJywgdGhpcy5kYXRhLm9yZGVyKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxEb29kbGVzIDogdGhpcy5kYXRhLmFsbERvb2RsZXMuY29uY2F0KG1vcmVEb29kbGVzKVxuICAgIH0pXG4gIH0sXG5cbiAgZmlsdGVyU2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsdGVyQWN0aW9uU2hvdzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgb25BY3Rpb25DbG9zZSgpIHtcblxuICB9LFxuXG4gIG9uQWN0aW9uU2VsZWN0KGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKDExMSwgZS5kZXRhaWwpXG4gICAgc3dpdGNoIChlLmRldGFpbC5jb2RlKSB7XG4gICAgICBjYXNlICdvcmRlcic6XG4gICAgICAgIGlmKGUuZGV0YWlsLm5hbWUgPT09ICflgJLluo/mjpLliJcnKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9yZGVyOiBcImRlc2NcIixcbiAgICAgICAgICAgIGZpbHRlckFjdGlvbiA6IFtcbiAgICAgICAgICAgICAgeyBjb2RlOiAnb3JkZXInLCBuYW1lOiAn5q2j5bqP5o6S5YiXJyB9LFxuICAgICAgICAgICAgICB7IGNvZGU6ICdzdGFydERhdGUnLCBuYW1lOiAn6LW35aeL5pel5pyfJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9yZGVyOiBcImFzY1wiLFxuICAgICAgICAgICAgZmlsdGVyQWN0aW9uIDogW1xuICAgICAgICAgICAgICB7IGNvZGU6ICdvcmRlcicsIG5hbWU6ICflgJLluo/mjpLliJcnIH0sXG4gICAgICAgICAgICAgIHsgY29kZTogJ3N0YXJ0RGF0ZScsIG5hbWU6ICfotbflp4vml6XmnJ8nIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0KClcblxuICAgICAgICB0aGlzLmNsb3NlQWN0aW9uKClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnc3RhcnREYXRlJzogXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZGF0ZVBpY2tlclNob3c6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jbG9zZUFjdGlvbigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSxcblxuICBjbG9zZUFjdGlvbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsdGVyQWN0aW9uU2hvdzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIGFzeW5jIHJlc2V0KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIGFsbERvb2RsZXM6IFtdXG4gICAgfSlcblxuICAgIGxldCBhbGxEb29kbGVzID0gYXdhaXQgZ2V0QWxsRG9vZGxlcyh0aGlzLmRhdGEucGFnZVNpemUsIHRoaXMuZGF0YS5jdXJyZW50UGFnZSwgJzAnLCB0aGlzLmRhdGEub3JkZXIpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFsbERvb2RsZXM6IGFsbERvb2RsZXNcbiAgICB9KVxuICAgIFxuICB9LFxuXG4gIGJhY2syVG9wKCk6IHZvaWQge1xuICAgIGlmICh3eC5wYWdlU2Nyb2xsVG8pIHtcbiAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICB0aGlzLmxvYWRNb3JlKClcbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==