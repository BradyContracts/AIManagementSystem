class KnowledgeService {
    private knowledgeEntries: Array<{ title: string; content: string; tags: string[] }> = [];

    addKnowledge(title: string, content: string, tags: string[]): void {
        const newEntry = { title, content, tags };
        this.knowledgeEntries.push(newEntry);
    }

    getKnowledge(): Array<{ title: string; content: string; tags: string[] }> {
        return this.knowledgeEntries;
    }

    updateKnowledge(title: string, updatedContent: string, updatedTags: string[]): boolean {
        const entryIndex = this.knowledgeEntries.findIndex(entry => entry.title === title);
        if (entryIndex !== -1) {
            this.knowledgeEntries[entryIndex].content = updatedContent;
            this.knowledgeEntries[entryIndex].tags = updatedTags;
            return true;
        }
        return false;
    }
}

export default KnowledgeService;