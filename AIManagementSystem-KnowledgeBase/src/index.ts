import express from 'express';
import { KnowledgeService } from './services/knowledgeService';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const knowledgeService = new KnowledgeService();

app.post('/knowledge', (req, res) => {
    const { title, content, tags } = req.body;
    const knowledgeEntry = knowledgeService.addKnowledge(title, content, tags);
    res.status(201).json(knowledgeEntry);
});

app.get('/knowledge/:id', (req, res) => {
    const knowledgeEntry = knowledgeService.getKnowledge(req.params.id);
    if (knowledgeEntry) {
        res.json(knowledgeEntry);
    } else {
        res.status(404).send('Knowledge entry not found');
    }
});

app.put('/knowledge/:id', (req, res) => {
    const { title, content, tags } = req.body;
    const updatedEntry = knowledgeService.updateKnowledge(req.params.id, title, content, tags);
    if (updatedEntry) {
        res.json(updatedEntry);
    } else {
        res.status(404).send('Knowledge entry not found');
    }
});

app.listen(port, () => {
    console.log(`AI Management System Knowledge Base running at http://localhost:${port}`);
});