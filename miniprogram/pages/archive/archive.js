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
        startDate: {},
        filterActionShow: false,
        filterAction: [
            { code: 'order', name: '正序排列' },
            { code: 'startDate', name: '起始日期' },
        ],
        currentDate: new Date().getTime(),
        minDate: new Date(1999, 10, 31).getTime(),
        maxDate: new Date().getTime(),
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
    goToDetail: function (e) {
        console.log(e.currentTarget.dataset.id);
        wx.navigateTo({
            url: "/pages/detail/detail?id=" + e.currentTarget.dataset.id
        });
    },
    onDateConfirm: function (e) {
        console.log('选中日期', e.detail);
        var date = new Date(e.detail);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var startDate = {
            year: year,
            month: month,
            day: day
        };
        this.setData({
            startDate: startDate
        });
        this.reset(startDate);
        this.onCancel();
    },
    onCancel: function () {
        this.setData({
            datePickerShow: false
        });
    },
    onClickHide: function () {
        this.onCancel();
    },
    onInput: function (e) {
        console.log('datetime', e);
        this.setData({
            currentDate: e.detail,
        });
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var dateNow, startDate, countNumber, allDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateNow = new Date();
                        startDate = {
                            year: dateNow.getFullYear(),
                            month: dateNow.getMonth() + 1,
                            day: dateNow.getDate()
                        };
                        this.setData({
                            startDate: startDate
                        });
                        return [4, api_1.getCountOfDoodles()];
                    case 1:
                        countNumber = _a.sent();
                        this.setData({
                            countNumber: countNumber
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, this.data.startDate)];
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
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, this.data.startDate)];
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
    reset: function (startDate) {
        return __awaiter(this, void 0, void 0, function () {
            var allDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            pageSize: 10,
                            currentPage: 1,
                            allDoodles: [],
                            startDate: startDate
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order, startDate)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBa0U7QUFHbEUsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixjQUFjLEVBQUUsS0FBSztRQUNyQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBRWIsZ0JBQWdCLEVBQUUsS0FBSztRQUN2QixZQUFZLEVBQUU7WUFDWixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtTQUNwQztRQUVELFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUNqQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDekMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQzdCLFNBQVMsRUFBVCxVQUFVLElBQVksRUFBRSxLQUFhO1lBQ25DLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbkIsT0FBVSxLQUFLLFdBQUcsQ0FBQTthQUNuQjtZQUNELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDcEIsT0FBVSxLQUFLLFdBQUcsQ0FBQTthQUNuQjtZQUNELE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUVELFVBQVUsRUFBRSxFQUFjO0tBQzNCO0lBRUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMs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S0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvb2RsZSB9IGZyb20gXCIuLi8uLi90eXBlL0Rvb2RsZS50eXBlXCJcbmltcG9ydCB7IGdldEFsbERvb2RsZXMsIGdldENvdW50T2ZEb29kbGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5cbi8vIHt7cGFnZX19LnRzXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgY291bnROdW1iZXI6IDAsXG4gICAgcGFnZVNpemU6IDEwLFxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIG9yZGVyOiBcImRlc2NcIixcbiAgICBkYXRlUGlja2VyU2hvdzogZmFsc2UsXG4gICAgZGF0ZVBpY2tlZDogXCJcIixcbiAgICBzdGFydERhdGU6IHt9LFxuXG4gICAgZmlsdGVyQWN0aW9uU2hvdzogZmFsc2UsXG4gICAgZmlsdGVyQWN0aW9uOiBbXG4gICAgICB7IGNvZGU6ICdvcmRlcicsIG5hbWU6ICfmraPluo/mjpLliJcnIH0sXG4gICAgICB7IGNvZGU6ICdzdGFydERhdGUnLCBuYW1lOiAn6LW35aeL5pel5pyfJyB9LFxuICAgIF0sXG5cbiAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTk5OSwgMTAsIDMxKS5nZXRUaW1lKCksXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgZm9ybWF0dGVyKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV95bm0YFxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlfeaciGBcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG5cbiAgICBhbGxEb29kbGVzOiBbXSBhcyBEb29kbGVbXVxuICB9LFxuXG4gIGdvVG9EZXRhaWwoZTogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAvcGFnZXMvZGV0YWlsL2RldGFpbD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICB9KVxuICB9LFxuXG4gIG9uRGF0ZUNvbmZpcm0oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ+mAieS4reaXpeacnycsIGUuZGV0YWlsKVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZS5kZXRhaWwpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVcbiAgICB9KVxuICAgIHRoaXMucmVzZXQoc3RhcnREYXRlKVxuXG4gICAgdGhpcy5vbkNhbmNlbCgpXG4gIH0sXG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRhdGVQaWNrZXJTaG93OiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgb25DbGlja0hpZGUoKSB7XG4gICAgdGhpcy5vbkNhbmNlbCgpXG4gIH0sXG5cbiAgb25JbnB1dChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZGF0ZXRpbWUnLCBlKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjdXJyZW50RGF0ZTogZS5kZXRhaWwsXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBkYXRlTm93ID0gbmV3IERhdGUoKVxuICAgIGxldCBzdGFydERhdGUgPSB7XG4gICAgICB5ZWFyOiBkYXRlTm93LmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDogZGF0ZU5vdy5nZXRNb250aCgpICsgMSxcbiAgICAgIGRheTogZGF0ZU5vdy5nZXREYXRlKClcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlXG4gICAgfSlcbiAgICBsZXQgY291bnROdW1iZXIgPSBhd2FpdCBnZXRDb3VudE9mRG9vZGxlcygpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGNvdW50TnVtYmVyOiBjb3VudE51bWJlclxuICAgIH0pXG5cbiAgICBsZXQgYWxsRG9vZGxlcyA9IGF3YWl0IGdldEFsbERvb2RsZXModGhpcy5kYXRhLnBhZ2VTaXplLCB0aGlzLmRhdGEuY3VycmVudFBhZ2UsICcwJywgdGhpcy5kYXRhLm9yZGVyLCB0aGlzLmRhdGEuc3RhcnREYXRlKVxuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFsbERvb2RsZXM6IGFsbERvb2RsZXNcbiAgICB9KVxuICB9LFxuICAvLyDliqDovb3mm7TlpJpcbiAgYXN5bmMgbG9hZE1vcmUoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnRQYWdlIDogdGhpcy5kYXRhLmN1cnJlbnRQYWdlICsgMVxuICAgIH0pXG4gICAgbGV0IG1vcmVEb29kbGVzID0gYXdhaXQgZ2V0QWxsRG9vZGxlcyh0aGlzLmRhdGEucGFnZVNpemUsIHRoaXMuZGF0YS5jdXJyZW50UGFnZSwgJzAnLCB0aGlzLmRhdGEub3JkZXIsIHRoaXMuZGF0YS5zdGFydERhdGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFsbERvb2RsZXMgOiB0aGlzLmRhdGEuYWxsRG9vZGxlcy5jb25jYXQobW9yZURvb2RsZXMpXG4gICAgfSlcbiAgfSxcblxuICBmaWx0ZXJTaG93KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBmaWx0ZXJBY3Rpb25TaG93OiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBvbkFjdGlvbkNsb3NlKCkge1xuXG4gIH0sXG5cbiAgb25BY3Rpb25TZWxlY3QoZTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoIChlLmRldGFpbC5jb2RlKSB7XG4gICAgICBjYXNlICdvcmRlcic6XG4gICAgICAgIGlmKGUuZGV0YWlsLm5hbWUgPT09ICflgJLluo/mjpLliJcnKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9yZGVyOiBcImRlc2NcIixcbiAgICAgICAgICAgIGZpbHRlckFjdGlvbiA6IFtcbiAgICAgICAgICAgICAgeyBjb2RlOiAnb3JkZXInLCBuYW1lOiAn5q2j5bqP5o6S5YiXJyB9LFxuICAgICAgICAgICAgICB7IGNvZGU6ICdzdGFydERhdGUnLCBuYW1lOiAn6LW35aeL5pel5pyfJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9yZGVyOiBcImFzY1wiLFxuICAgICAgICAgICAgZmlsdGVyQWN0aW9uIDogW1xuICAgICAgICAgICAgICB7IGNvZGU6ICdvcmRlcicsIG5hbWU6ICflgJLluo/mjpLliJcnIH0sXG4gICAgICAgICAgICAgIHsgY29kZTogJ3N0YXJ0RGF0ZScsIG5hbWU6ICfotbflp4vml6XmnJ8nIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0KClcblxuICAgICAgICB0aGlzLmNsb3NlQWN0aW9uKClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnc3RhcnREYXRlJzogXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZGF0ZVBpY2tlclNob3c6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jbG9zZUFjdGlvbigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSxcblxuICBjbG9zZUFjdGlvbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsdGVyQWN0aW9uU2hvdzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIGFzeW5jIHJlc2V0KHN0YXJ0RGF0ZT86IG9iamVjdCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIGFsbERvb2RsZXM6IFtdLFxuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVcbiAgICB9KVxuXG4gICAgbGV0IGFsbERvb2RsZXMgPSBhd2FpdCBnZXRBbGxEb29kbGVzKHRoaXMuZGF0YS5wYWdlU2l6ZSwgdGhpcy5kYXRhLmN1cnJlbnRQYWdlLCAnMCcsIHRoaXMuZGF0YS5vcmRlciwgc3RhcnREYXRlKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxEb29kbGVzOiBhbGxEb29kbGVzXG4gICAgfSlcbiAgICBcbiAgfSxcblxuICBiYWNrMlRvcCgpOiB2b2lkIHtcbiAgICBpZiAod3gucGFnZVNjcm9sbFRvKSB7XG4gICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgdGhpcy5sb2FkTW9yZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=