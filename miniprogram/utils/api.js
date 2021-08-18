"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDoodles = exports.getCountOfDoodles = exports.getDoodleByMonth = exports.getHistoryOfToday = exports.getDoodlesOfToday = void 0;
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
function getHistoryOfToday() {
    return new Promise(function (resolve, reject) {
        http_1.default.get("/api/doodles/history").then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getHistoryOfToday = getHistoryOfToday;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QjtBQUd6QixTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsY0FBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkMsT0FBTyxDQUFDLEdBQWUsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVJELDhDQVFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLEtBQWE7SUFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQUksU0FBSSxLQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JELE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw0Q0FRQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsY0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQy9CLE9BQU8sQ0FBQyxHQUFhLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQWEsRUFBRSxLQUFjLEVBQUUsU0FBa0I7SUFDekcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksTUFBTSxHQUFHO1lBQ1gsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBO1NBQ25DLENBQUE7UUFDRCxjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDNUMsT0FBTyxDQUFDLEdBQWUsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVhELHNDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSBcIi4vaHR0cFwiXHJcbmltcG9ydCB7IERvb2RsZSB9IGZyb20gXCIuLi90eXBlL0Rvb2RsZS50eXBlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb29kbGVzT2ZUb2RheSgpOlByb21pc2U8RG9vZGxlW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaHR0cC5nZXQoXCIvYXBpL2Rvb2RsZXMvdG9kYXlcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIaXN0b3J5T2ZUb2RheSgpOiBQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KFwiL2FwaS9kb29kbGVzL2hpc3RvcnlcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb29kbGVCeU1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6UHJvbWlzZTxEb29kbGVbXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBodHRwLmdldChgL2FwaS9kb29kbGVzL2pzb24vJHt5ZWFyfS8ke21vbnRofWApLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMgYXMgRG9vZGxlW10pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291bnRPZkRvb2RsZXMoKTpQcm9taXNlPG51bWJlcj4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBodHRwLmdldCgnL2FwaS9kb29kbGVzJykudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBudW1iZXIpXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRG9vZGxlcyhzaXplOiBudW1iZXIsIHBhZ2U6IG51bWJlciwgZnVsbD86IHN0cmluZywgb3JkZXI/OiBzdHJpbmcsIHN0YXJ0RGF0ZT86IG9iamVjdCk6UHJvbWlzZTxEb29kbGVbXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICBzaXplLCBwYWdlLCBmdWxsLCBvcmRlciwgc3RhcnREYXRlXHJcbiAgICB9XHJcbiAgICBodHRwLnBvc3QoJy9hcGkvZG9vZGxlcy9hbGwnLCBwYXJhbXMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMgYXMgRG9vZGxlW10pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICB9KVxyXG59Il19