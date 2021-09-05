"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDoodles = exports.getCountOfDoodles = exports.getDoodleByMonth = exports.getHistoryOfToday = exports.getDetailById = exports.getDoodlesOfToday = void 0;
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
function getDetailById(id) {
    return new Promise(function (resolve, reject) {
        var params = {
            id: id
        };
        http_1.default.post("/api/doodles/detail", params).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.getDetailById = getDetailById;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QjtBQUd6QixTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxFQUFVO0lBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFJLE1BQU0sR0FBVztZQUNuQixFQUFFLElBQUE7U0FDSCxDQUFBO1FBQ0QsY0FBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQy9DLE9BQU8sQ0FBRSxHQUFhLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFYRCxzQ0FXQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsY0FBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkMsT0FBTyxDQUFDLEdBQWUsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVJELDhDQVFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLEtBQWE7SUFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQUksU0FBSSxLQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JELE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw0Q0FRQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsY0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQy9CLE9BQU8sQ0FBQyxHQUFhLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQWEsRUFBRSxLQUFjLEVBQUUsU0FBa0I7SUFDekcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksTUFBTSxHQUFHO1lBQ1gsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBO1NBQ25DLENBQUE7UUFDRCxjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDNUMsT0FBTyxDQUFDLEdBQWUsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVhELHNDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSBcIi4vaHR0cFwiXHJcbmltcG9ydCB7IERvb2RsZSB9IGZyb20gXCIuLi90eXBlL0Rvb2RsZS50eXBlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREb29kbGVzT2ZUb2RheSgpOlByb21pc2U8RG9vZGxlW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaHR0cC5nZXQoXCIvYXBpL2Rvb2RsZXMvdG9kYXlcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXRhaWxCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPERvb2RsZT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgcGFyYW1zOiBvYmplY3QgPSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgICBodHRwLnBvc3QoXCIvYXBpL2Rvb2RsZXMvZGV0YWlsXCIsIHBhcmFtcykudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKCByZXMgYXMgRG9vZGxlKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhpc3RvcnlPZlRvZGF5KCk6IFByb21pc2U8RG9vZGxlW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaHR0cC5nZXQoXCIvYXBpL2Rvb2RsZXMvaGlzdG9yeVwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzIGFzIERvb2RsZVtdKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERvb2RsZUJ5TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTpQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KGAvYXBpL2Rvb2RsZXMvanNvbi8ke3llYXJ9LyR7bW9udGh9YCkudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudE9mRG9vZGxlcygpOlByb21pc2U8bnVtYmVyPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KCcvYXBpL2Rvb2RsZXMnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzIGFzIG51bWJlcilcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxEb29kbGVzKHNpemU6IG51bWJlciwgcGFnZTogbnVtYmVyLCBmdWxsPzogc3RyaW5nLCBvcmRlcj86IHN0cmluZywgc3RhcnREYXRlPzogb2JqZWN0KTpQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgIHNpemUsIHBhZ2UsIGZ1bGwsIG9yZGVyLCBzdGFydERhdGVcclxuICAgIH1cclxuICAgIGh0dHAucG9zdCgnL2FwaS9kb29kbGVzL2FsbCcsIHBhcmFtcykudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0iXX0=