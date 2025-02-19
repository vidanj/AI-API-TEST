import { Request, Response } from 'express';
import { LLMService } from '../services/llmService';

export class ChatController {
  private llmService: LLMService;

  constructor() {
    this.llmService = new LLMService();
  }

  async handleChat(req: Request, res: Response): Promise<void> {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      const response = await this.llmService.generateResponse(prompt);
      res.json({ response });
    } catch (error) {
      console.error('Error in chat handler:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}