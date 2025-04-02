"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeModel = void 0;
class KnowledgeModel {
    constructor(title, content, tags) {
        this.title = title;
        this.content = content;
        this.tags = tags;
    }
    validate() {
        if (!this.title || !this.content) {
            return false;
        }
        return true;
    }
}
exports.KnowledgeModel = KnowledgeModel;
