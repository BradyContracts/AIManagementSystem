"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KnowledgeService {
    constructor() {
        this.knowledgeEntries = [];
    }
    addKnowledge(title, content, tags) {
        const newEntry = { title, content, tags };
        this.knowledgeEntries.push(newEntry);
    }
    getKnowledge() {
        return this.knowledgeEntries;
    }
    updateKnowledge(title, updatedContent, updatedTags) {
        const entryIndex = this.knowledgeEntries.findIndex(entry => entry.title === title);
        if (entryIndex !== -1) {
            this.knowledgeEntries[entryIndex].content = updatedContent;
            this.knowledgeEntries[entryIndex].tags = updatedTags;
            return true;
        }
        return false;
    }
}
exports.default = KnowledgeService;
