"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knowledgeService_1 = require("./services/knowledgeService");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
const knowledgeService = new knowledgeService_1.KnowledgeService();
app.post('/knowledge', (req, res) => {
    const { title, content, tags } = req.body;
    const knowledgeEntry = knowledgeService.addKnowledge(title, content, tags);
    res.status(201).json(knowledgeEntry);
});
app.get('/knowledge/:id', (req, res) => {
    const knowledgeEntry = knowledgeService.getKnowledge(req.params.id);
    if (knowledgeEntry) {
        res.json(knowledgeEntry);
    }
    else {
        res.status(404).send('Knowledge entry not found');
    }
});
app.put('/knowledge/:id', (req, res) => {
    const { title, content, tags } = req.body;
    const updatedEntry = knowledgeService.updateKnowledge(req.params.id, title, content, tags);
    if (updatedEntry) {
        res.json(updatedEntry);
    }
    else {
        res.status(404).send('Knowledge entry not found');
    }
});
app.listen(port, () => {
    console.log(`AI Management System Knowledge Base running at http://localhost:${port}`);
});
