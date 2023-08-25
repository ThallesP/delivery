"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const UniqueEntityId_1 = require("./UniqueEntityId");
class Entity {
    constructor(props, id) {
        this.props = props;
        this._id = id !== null && id !== void 0 ? id : new UniqueEntityId_1.UniqueEntityId();
    }
}
exports.Entity = Entity;
