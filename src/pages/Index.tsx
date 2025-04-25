
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PromptCard from "@/components/PromptCard";
import AnimatedBackground from "@/components/AnimatedBackground";
import AIPlatformSlider from "@/components/AIPlatformSlider";
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 space-y-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 mb-4">
              Türkçe Prompt Kütüphanesi
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in">
              ChatGPT ile daha etkili konuşmalar için Türkçe prompt koleksiyonu
            </p>
          </div>
          
          <div className="py-8">
            <AIPlatformSlider />
          </div>
        </div>

        <div className="flex justify-center max-w-md mx-auto mb-12 animate-fade-in">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Prompt ara..."
              className="pl-10 bg-white/5 backdrop-blur-sm border-purple-500/20 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
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
