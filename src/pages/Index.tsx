
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PromptCard from "@/components/PromptCard";
import PromptUploader from "@/components/PromptUploader";
import { Prompt } from "@/utils/csvParser";

// Örnek promptlar
const INITIAL_PROMPTS: Prompt[] = [
  {
    title: "İngilizce Öğretmeni",
    description: "İngilizce öğretmeni rolünde kullanıcıya yardımcı olur",
    prompt: "Ben bir İngilizce öğretmeniyim. Size İngilizce öğrenmenizde yardımcı olabilirim."
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prompts, setPrompts] = useState<Prompt[]>(INITIAL_PROMPTS);

  const filteredPrompts = prompts.filter(prompt =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUploadedPrompts = (newPrompts: Prompt[]) => {
    setPrompts(prevPrompts => [...prevPrompts, ...newPrompts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Türkçe ChatGPT Promptları
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ChatGPT ile daha etkili konuşmalar için Türkçe prompt koleksiyonu
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-md mx-auto mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Prompt ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <PromptUploader onUpload={handleUploadedPrompts} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard
              key={index}
              title={prompt.title}
              description={prompt.description}
              prompt={prompt.prompt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
