
import Papa from 'papaparse';

export interface Prompt {
  title: string;
  description: string;
  prompt: string;
  category?: string;
}

export const parseCSV = (file: File): Promise<Prompt[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const prompts: Prompt[] = results.data.map((row: any) => ({
          title: row.title || '',
          description: row.description || '',
          prompt: row.prompt || '',
          category: row.category || 'Genel'
        })).filter((prompt: Prompt) => prompt.title && prompt.prompt);
        resolve(prompts);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};
