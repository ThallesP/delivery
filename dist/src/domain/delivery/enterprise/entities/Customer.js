"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Entity_1 = require("@/shared/entities/Entity");
class Customer extends Entity_1.Entity {
    static create(props, id) {
        var _a;
        return new Customer(Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() }), id);
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
        this.touch();
    }
    touch() {
        this.props.updatedAt = new Date();
    }
}
exports.Customer = Customer;
