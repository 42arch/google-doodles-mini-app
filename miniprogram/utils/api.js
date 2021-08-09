"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoodlesOfToday = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QjtBQUd6QixTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFlLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFSRCw4Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gXCIuL2h0dHBcIlxyXG5pbXBvcnQgeyBEb29kbGUgfSBmcm9tIFwiLi4vdHlwZS9Eb29kbGUudHlwZVwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9vZGxlc09mVG9kYXkoKTpQcm9taXNlPERvb2RsZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGh0dHAuZ2V0KFwiL2FwaS9kb29kbGVzL3RvZGF5XCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMgYXMgRG9vZGxlW10pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICB9KVxyXG59Il19