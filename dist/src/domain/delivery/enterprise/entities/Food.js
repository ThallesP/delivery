"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const Entity_1 = require("@/shared/entities/Entity");
const Slug_1 = require("./valueObjects/Slug");
class Food extends Entity_1.Entity {
    static create(props, id) {
        var _a, _b;
        return new Food(Object.assign(Object.assign({}, props), { slug: (_a = props.slug) !== null && _a !== void 0 ? _a : Slug_1.Slug.createFromText(props.name), createdAt: (_b = props.createdAt) !== null && _b !== void 0 ? _b : new Date() }), id);
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
        this.touch();
    }
    get slug() {
        return this.props.slug;
    }
    get description() {
        return this.props.description;
    }
    set description(description) {
        this.props.description = description;
        this.touch();
    }
    get price() {
        return this.props.price;
    }
    set price(price) {
        this.props.price = price;
        this.touch();
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    touch() {
        this.props.updatedAt = new Date();
    }
}
exports.Food = Food;
