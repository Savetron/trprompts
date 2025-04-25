
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PromptCard from "@/components/PromptCard";
import { parseCSV, Prompt } from "@/utils/csvParser";
import { toast } from "sonner";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    fetch('/prompts.csv')
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'prompts.csv', { type: 'text/csv' });
        return parseCSV(file);
      })
      .then(loadedPrompts => {
        setPrompts(loadedPrompts);
      })
      .catch(error => {
        console.error('CSV yüklenirken hata:', error);
        toast.error('Promptlar yüklenirken bir hata oluştu');
      });
  }, []);

  const filteredPrompts = prompts.filter(prompt =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Türkçe Prompt Kütüphanesi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ChatGPT ile daha etkili konuşmalar için Türkçe prompt koleksiyonu
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto mb-12">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Prompt ara..."
              className="pl-10 bg-white/80 backdrop-blur-sm border-purple-100 focus:border-purple-300 focus:ring-purple-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard
              key={index}
              title={prompt.title}
              description={prompt.description}
              prompt={prompt.prompt}
              category={prompt.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
