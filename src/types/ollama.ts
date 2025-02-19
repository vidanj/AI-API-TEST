export interface OllamaRequest {
    model: string;
    prompt: string;
    stream?: boolean;
    options?: {
      temperature?: number;
      top_p?: number;
      top_k?: number;
    };
  }

  export interface OllamaResponse {
    model: string;
    created_at: string;
    response: string;
    done: boolean;
  }