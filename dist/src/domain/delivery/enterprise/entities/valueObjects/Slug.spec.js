"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Slug_1 = require("./Slug");
test('it should be able to create a new slug from text', () => {
    const slug = Slug_1.Slug.createFromText('Example question title');
    expect(slug.value).toBe('example-question-title');
});
