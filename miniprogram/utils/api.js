"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDoodles = exports.getCountOfDoodles = exports.getDoodleByMonth = exports.getDoodlesOfToday = void 0;
var http_1 = require("./http");
function getDoodlesOfToday() {
    return new Promise(function (resolve, reject) {
        http_1.default.get("/api/doodles/today").then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getDoodlesOfToday = getDoodlesOfToday;
function getDoodleByMonth(year, month) {
    return new Promise(function (resolve, reject) {
        http_1.default.get("/api/doodles/json/" + year + "/" + month).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getDoodleByMonth = getDoodleByMonth;
function getCountOfDoodles() {
    return new Promise(function (resolve, reject) {
        http_1.default.get('/api/doodles').then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getCountOfDoodles = getCountOfDoodles;
function getAllDoodles(size, page, full, order, startDate) {
    return new Promise(function (resolve, reject) {
        var params = {
            size: size, page: page, full: full, order: order, startDate: startDate
        };
        http_1.default.post('/api/doodles/all', params).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getAllDoodles = getAllDoodles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QjtBQUd6QixTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFhO0lBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxjQUFJLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLFNBQUksS0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyRCxPQUFPLENBQUMsR0FBZSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBUkQsNENBUUM7QUFFRCxTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMvQixPQUFPLENBQUMsR0FBYSxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBUkQsOENBUUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFhLEVBQUUsS0FBYyxFQUFFLFNBQWtCO0lBQ3pHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFJLE1BQU0sR0FBRztZQUNYLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsV0FBQTtTQUNuQyxDQUFBO1FBQ0QsY0FBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQzVDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFYRCxzQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gXCIuL2h0dHBcIlxyXG5pbXBvcnQgeyBEb29kbGUgfSBmcm9tIFwiLi4vdHlwZS9Eb29kbGUudHlwZVwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9vZGxlc09mVG9kYXkoKTpQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KFwiL2FwaS9kb29kbGVzL3RvZGF5XCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMgYXMgRG9vZGxlW10pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9vZGxlQnlNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOlByb21pc2U8RG9vZGxlW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaHR0cC5nZXQoYC9hcGkvZG9vZGxlcy9qc29uLyR7eWVhcn0vJHttb250aH1gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzIGFzIERvb2RsZVtdKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50T2ZEb29kbGVzKCk6UHJvbWlzZTxudW1iZXI+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaHR0cC5nZXQoJy9hcGkvZG9vZGxlcycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMgYXMgbnVtYmVyKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbERvb2RsZXMoc2l6ZTogbnVtYmVyLCBwYWdlOiBudW1iZXIsIGZ1bGw/OiBzdHJpbmcsIG9yZGVyPzogc3RyaW5nLCBzdGFydERhdGU/OiBvYmplY3QpOlByb21pc2U8RG9vZGxlW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgc2l6ZSwgcGFnZSwgZnVsbCwgb3JkZXIsIHN0YXJ0RGF0ZVxyXG4gICAgfVxyXG4gICAgaHR0cC5wb3N0KCcvYXBpL2Rvb2RsZXMvYWxsJywgcGFyYW1zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzIGFzIERvb2RsZVtdKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufSJdfQ==