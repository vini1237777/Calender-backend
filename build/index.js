"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var userRoutes = require("./router/user.routes");
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", " Content-Type, Accept," + " Authorization,");
    res.header("Access-Control-Allow-origin", req.headers.origin);
    next();
});
app.use(userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function () {
    console.log("The application is listening on port 3000!");
});
mongoose
    .connect(process.env.DB_STRING, {})
    .then(function () { return console.log("Database connected!"); })
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=index.js.map