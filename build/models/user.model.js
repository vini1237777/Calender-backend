"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var users = new mongoose_1.Schema({}, {
    versionKey: false,
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("users", users);
//# sourceMappingURL=user.model.js.map