"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTags = exports.validateInput = exports.formatTitle = void 0;
function formatTitle(title) {
    return title.trim().charAt(0).toUpperCase() + title.slice(1);
}
exports.formatTitle = formatTitle;
function validateInput(input) {
    return input && input.trim().length > 0;
}
exports.validateInput = validateInput;
function formatTags(tags) {
    return tags.map(tag => tag.trim()).join(', ');
}
exports.formatTags = formatTags;
