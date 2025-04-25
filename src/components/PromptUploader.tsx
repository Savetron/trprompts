
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { parseCSV, Prompt } from '@/utils/csvParser';

interface PromptUploaderProps {
  onUpload: (prompts: Prompt[]) => void;
}

const PromptUploader: React.FC<PromptUploaderProps> = ({ onUpload }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/csv') {
      toast.error('Lütfen sadece CSV dosyası yükleyin');
      return;
    }

    try {
      setIsUploading(true);
      const prompts = await parseCSV(file);
      onUpload(prompts);
      toast.success(`${prompts.length} prompt başarıyla yüklendi`);
    } catch (error) {
      toast.error('CSV dosyası yüklenirken bir hata oluştu');
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFileUpload} 
        className="hidden" 
        id="csv-upload" 
        disabled={isUploading}
      />
      <label htmlFor="csv-upload">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          disabled={isUploading}
        >
          <Upload className="h-4 w-4" />
          {isUploading ? 'Yükleniyor...' : 'CSV Dosyası Yükle'}
        </Button>
      </label>
    </div>
  );
};

export default PromptUploader;
