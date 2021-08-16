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
        filterActionShow: false,
        filterAction: [
            { code: 'order', name: '正序排列' },
            { code: 'startDate', name: '起始日期' },
        ],
        allDoodles: []
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
                        console.log(66, allDoodles);
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
                        console.log('load more', this.data.order);
                        this.setData({
                            currentPage: this.data.currentPage + 1
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', this.data.order)];
                    case 1:
                        moreDoodles = _a.sent();
                        console.log('more', moreDoodles);
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
                this.reset(e.detail.name);
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
    reset: function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var allDoodles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('reset', order, this.data.order);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBa0U7QUFHbEUsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFFYixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1NBQ3BDO1FBRUQsVUFBVSxFQUFFLEVBQWM7S0FDM0I7SUFLSyxNQUFNOzs7Ozs0QkFDUSxXQUFNLHVCQUFpQixFQUFFLEVBQUE7O3dCQUF2QyxXQUFXLEdBQUcsU0FBeUI7d0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLFdBQVc7eUJBQ3pCLENBQUMsQ0FBQTt3QkFFZSxXQUFNLG1CQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUFqRyxVQUFVLEdBQUcsU0FBb0Y7d0JBRXJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO3dCQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFVBQVUsRUFBRSxVQUFVO3lCQUN2QixDQUFDLENBQUE7Ozs7O0tBQ0g7SUFFSyxRQUFROzs7Ozs7d0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElB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SDtJQUVELFFBQVEsRUFBUjtRQUNFLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRTtZQUNuQixFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNkLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsT0FBTyxFQUFFLGlDQUFpQzthQUMzQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb29kbGUgfSBmcm9tIFwiLi4vLi4vdHlwZS9Eb29kbGUudHlwZVwiXG5pbXBvcnQgeyBnZXRBbGxEb29kbGVzLCBnZXRDb3VudE9mRG9vZGxlcyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxuXG4vLyB7e3BhZ2V9fS50c1xuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGNvdW50TnVtYmVyOiAwLFxuICAgIHBhZ2VTaXplOiAxMCxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBvcmRlcjogXCJkZXNjXCIsXG5cbiAgICBmaWx0ZXJBY3Rpb25TaG93OiBmYWxzZSxcbiAgICBmaWx0ZXJBY3Rpb246IFtcbiAgICAgIHsgY29kZTogJ29yZGVyJywgbmFtZTogJ+ato+W6j+aOkuWIlycgfSxcbiAgICAgIHsgY29kZTogJ3N0YXJ0RGF0ZScsIG5hbWU6ICfotbflp4vml6XmnJ8nIH0sXG4gICAgXSxcblxuICAgIGFsbERvb2RsZXM6IFtdIGFzIERvb2RsZVtdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IGNvdW50TnVtYmVyID0gYXdhaXQgZ2V0Q291bnRPZkRvb2RsZXMoKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb3VudE51bWJlcjogY291bnROdW1iZXJcbiAgICB9KVxuXG4gICAgbGV0IGFsbERvb2RsZXMgPSBhd2FpdCBnZXRBbGxEb29kbGVzKHRoaXMuZGF0YS5wYWdlU2l6ZSwgdGhpcy5kYXRhLmN1cnJlbnRQYWdlLCAnMCcsIHRoaXMuZGF0YS5vcmRlcilcblxuICAgIGNvbnNvbGUubG9nKDY2LCBhbGxEb29kbGVzKVxuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFsbERvb2RsZXM6IGFsbERvb2RsZXNcbiAgICB9KVxuICB9LFxuICAvLyDliqDovb3mm7TlpJpcbiAgYXN5bmMgbG9hZE1vcmUoKSB7XG4gICAgY29uc29sZS5sb2coJ2xvYWQgbW9yZScsIHRoaXMuZGF0YS5vcmRlcilcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudFBhZ2UgOiB0aGlzLmRhdGEuY3VycmVudFBhZ2UgKyAxXG4gICAgfSlcbiAgICBsZXQgbW9yZURvb2RsZXMgPSBhd2FpdCBnZXRBbGxEb29kbGVzKHRoaXMuZGF0YS5wYWdlU2l6ZSwgdGhpcy5kYXRhLmN1cnJlbnRQYWdlLCAnMCcsIHRoaXMuZGF0YS5vcmRlcilcblxuICAgIGNvbnNvbGUubG9nKCdtb3JlJywgbW9yZURvb2RsZXMpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFsbERvb2RsZXMgOiB0aGlzLmRhdGEuYWxsRG9vZGxlcy5jb25jYXQobW9yZURvb2RsZXMpXG4gICAgfSlcbiAgfSxcblxuICBmaWx0ZXJTaG93KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBmaWx0ZXJBY3Rpb25TaG93OiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBvbkFjdGlvbkNsb3NlKCkge1xuXG4gIH0sXG5cbiAgb25BY3Rpb25TZWxlY3QoZTogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coMTExLCBlLmRldGFpbClcbiAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvZGUpIHtcbiAgICAgIGNhc2UgJ29yZGVyJzpcbiAgICAgICAgaWYoZS5kZXRhaWwubmFtZSA9PT0gJ+WAkuW6j+aOkuWIlycpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgb3JkZXI6IFwiZGVzY1wiLFxuICAgICAgICAgICAgZmlsdGVyQWN0aW9uIDogW1xuICAgICAgICAgICAgICB7IGNvZGU6ICdvcmRlcicsIG5hbWU6ICfmraPluo/mjpLliJcnIH0sXG4gICAgICAgICAgICAgIHsgY29kZTogJ3N0YXJ0RGF0ZScsIG5hbWU6ICfotbflp4vml6XmnJ8nIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgb3JkZXI6IFwiYXNjXCIsXG4gICAgICAgICAgICBmaWx0ZXJBY3Rpb24gOiBbXG4gICAgICAgICAgICAgIHsgY29kZTogJ29yZGVyJywgbmFtZTogJ+WAkuW6j+aOkuWIlycgfSxcbiAgICAgICAgICAgICAgeyBjb2RlOiAnc3RhcnREYXRlJywgbmFtZTogJ+i1t+Wni+aXpeacnycgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXQoZS5kZXRhaWwubmFtZSlcblxuICAgICAgICB0aGlzLmNsb3NlQWN0aW9uKClcbiAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgY2xvc2VBY3Rpb24oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZpbHRlckFjdGlvblNob3c6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBhc3luYyByZXNldChvcmRlcjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc2V0Jywgb3JkZXIsIHRoaXMuZGF0YS5vcmRlcilcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBhbGxEb29kbGVzOiBbXVxuICAgIH0pXG5cbiAgICBsZXQgYWxsRG9vZGxlcyA9IGF3YWl0IGdldEFsbERvb2RsZXModGhpcy5kYXRhLnBhZ2VTaXplLCB0aGlzLmRhdGEuY3VycmVudFBhZ2UsICcwJywgdGhpcy5kYXRhLm9yZGVyKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxEb29kbGVzOiBhbGxEb29kbGVzXG4gICAgfSlcbiAgICBcbiAgfSxcblxuICBiYWNrMlRvcCgpOiB2b2lkIHtcbiAgICBpZiAod3gucGFnZVNjcm9sbFRvKSB7XG4gICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgdGhpcy5sb2FkTW9yZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=