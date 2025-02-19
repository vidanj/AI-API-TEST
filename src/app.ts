import express from 'express';
import { ChatController } from './controllers/chatController';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const chatController = new ChatController();

app.post('/chat', (req, res) => chatController.handleChat(req, res));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});