import Papa from 'papaparse';

export interface Prompt {
  title: string;
  description: string;
  prompt: string;
  category?: string; // Zaten mevcut, varsayılan değeri 'Genel'
}

export const parseCSV = (file: File): Promise<Prompt[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const prompts: Prompt[] = results.data.map((row: any) => ({
          title: row.title || row.rol || '',
          description: row.description || row.istem || '',
          prompt: row.prompt || row.istem || '',
          category: row.category || (typeof row.gelistirici_icin !== 'undefined' ? (row.gelistirici_icin === 'TRUE' ? 'Geliştirici İçin' : 'Genel') : 'Genel')
        })).filter((prompt: Prompt) => prompt.title && prompt.prompt);
        resolve(prompts);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};
