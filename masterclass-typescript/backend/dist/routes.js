"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_controller_1 = __importDefault(require("./controllers/User.controller"));
var routes = express_1.Router();
routes.get("/users", User_controller_1.default.index);
routes.post("/users", User_controller_1.default.create);
exports.default = routes;
