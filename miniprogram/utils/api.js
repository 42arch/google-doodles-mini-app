"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoodleByMonth = exports.getDoodlesOfToday = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QjtBQUd6QixTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFhO0lBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxjQUFJLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLFNBQUksS0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyRCxPQUFPLENBQUMsR0FBZSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBUkQsNENBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tIFwiLi9odHRwXCJcclxuaW1wb3J0IHsgRG9vZGxlIH0gZnJvbSBcIi4uL3R5cGUvRG9vZGxlLnR5cGVcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERvb2RsZXNPZlRvZGF5KCk6UHJvbWlzZTxEb29kbGVbXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBodHRwLmdldChcIi9hcGkvZG9vZGxlcy90b2RheVwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzIGFzIERvb2RsZVtdKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgcmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERvb2RsZUJ5TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTpQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KGAvYXBpL2Rvb2RsZXMvanNvbi8ke3llYXJ9LyR7bW9udGh9YCkudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlcyBhcyBEb29kbGVbXSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlamVjdChlcnIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0iXX0=