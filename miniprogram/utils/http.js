"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = require("./const");
function get(url) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: const_1.BASE_URL + url,
            method: "GET",
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}
exports.default = {
    get: get
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBa0M7QUFFbEMsU0FBUyxHQUFHLENBQUMsR0FBVztJQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxnQkFBUSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25CLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBR0Qsa0JBQWU7SUFDYixHQUFHLEtBQUE7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25zdFwiXHJcblxyXG5mdW5jdGlvbiBnZXQodXJsOiBzdHJpbmcgKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyB1cmwsXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRcclxufSJdfQ==