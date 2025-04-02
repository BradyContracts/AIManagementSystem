export class KnowledgeModel {
    title: string;
    content: string;
    tags: string[];

    constructor(title: string, content: string, tags: string[]) {
        this.title = title;
        this.content = content;
        this.tags = tags;
    }

    validate(): boolean {
        if (!this.title || !this.content) {
            return false;
        }
        return true;
    }
}