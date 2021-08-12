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
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', 'desc')];
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
                        this.setData({
                            currentPage: this.data.currentPage + 1
                        });
                        return [4, api_1.getAllDoodles(this.data.pageSize, this.data.currentPage, '0', 'desc')];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBa0U7QUFHbEUsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO1FBRWQsVUFBVSxFQUFFLEVBQWM7S0FDM0I7SUFLSyxNQUFNOzs7Ozs0QkFDUSxXQUFNLHVCQUFpQixFQUFFLEVBQUE7O3dCQUF2QyxXQUFXLEdBQUcsU0FBeUI7d0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLFdBQVc7eUJBQ3pCLENBQUMsQ0FBQTt3QkFFZSxXQUFNLG1CQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFBOzt3QkFBeEYsVUFBVSxHQUFHLFNBQTJFO3dCQUU1RixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQTt3QkFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxVQUFVLEVBQUUsVUFBVTt5QkFDdkIsQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUssUUFBUTs7Ozs7O3dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7eUJBQ3hDLENBQUMsQ0FBQTt3QkFDZ0IsV0FBTSxtQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQXpGLFdBQVcsR0FBRyxTQUEyRTt3QkFFN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUE7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsVUFBVSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7eUJBQ3RELENBQUMsQ0FBQTs7Ozs7S0FDSDtJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uLy4uL3R5cGUvRG9vZGxlLnR5cGVcIlxuaW1wb3J0IHsgZ2V0QWxsRG9vZGxlcywgZ2V0Q291bnRPZkRvb2RsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuLy8ge3twYWdlfX0udHNcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjb3VudE51bWJlcjogMCxcbiAgICBwYWdlU2l6ZTogMTAsXG4gICAgY3VycmVudFBhZ2U6IDEsXG5cbiAgICBhbGxEb29kbGVzOiBbXSBhcyBEb29kbGVbXVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBjb3VudE51bWJlciA9IGF3YWl0IGdldENvdW50T2ZEb29kbGVzKClcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY291bnROdW1iZXI6IGNvdW50TnVtYmVyXG4gICAgfSlcblxuICAgIGxldCBhbGxEb29kbGVzID0gYXdhaXQgZ2V0QWxsRG9vZGxlcyh0aGlzLmRhdGEucGFnZVNpemUsIHRoaXMuZGF0YS5jdXJyZW50UGFnZSwgJzAnLCAnZGVzYycpXG5cbiAgICBjb25zb2xlLmxvZyg2NiwgYWxsRG9vZGxlcylcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxEb29kbGVzOiBhbGxEb29kbGVzXG4gICAgfSlcbiAgfSxcbiAgLy8g5Yqg6L295pu05aSaXG4gIGFzeW5jIGxvYWRNb3JlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjdXJyZW50UGFnZSA6IHRoaXMuZGF0YS5jdXJyZW50UGFnZSArIDFcbiAgICB9KVxuICAgIGxldCBtb3JlRG9vZGxlcyA9IGF3YWl0IGdldEFsbERvb2RsZXModGhpcy5kYXRhLnBhZ2VTaXplLCB0aGlzLmRhdGEuY3VycmVudFBhZ2UsICcwJywgJ2Rlc2MnKVxuXG4gICAgY29uc29sZS5sb2coJ21vcmUnLCBtb3JlRG9vZGxlcylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWxsRG9vZGxlcyA6IHRoaXMuZGF0YS5hbGxEb29kbGVzLmNvbmNhdChtb3JlRG9vZGxlcylcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==