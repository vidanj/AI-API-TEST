import axios from 'axios';
import { OllamaRequest, OllamaResponse } from '../types/ollama';

export class LLMService {
  private readonly baseUrl: string;
  private readonly model: string;

  constructor() {
    this.baseUrl = process.env.OLLAMA_HOST || 'http://localhost:11434';
    this.model = 'deepseek-coder:8b';
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const request: OllamaRequest = {
        model: this.model,
        prompt,
        options: {
          temperature: 0.7
        }
      };

      const response = await axios.post<OllamaResponse>(
        `${this.baseUrl}/api/generate`,
        request
      );

      return response.data.response;
    } catch (error) {
      console.error('Error calling LLM:', error);
      throw new Error('Failed to generate response from LLM');
    }
  }
}