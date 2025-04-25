
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PromptCard from "@/components/PromptCard";

// Örnek promptlar (daha sonra gerçek verilerle değiştirilecek)
const SAMPLE_PROMPTS = [
  {
    title: "İngilizce Öğretmeni",
    description: "İngilizce öğretmeni rolünde kullanıcıya yardımcı olur",
    prompt: "Ben bir İngilizce öğretmeniyim. Size İngilizce öğrenmenizde yardımcı olabilirim. Her seviyede gramer, kelime ve konuşma pratiği konularında destek verebilirim."
  },
  {
    title: "Kod Açıklayıcı",
    description: "Karmaşık kodları basit bir dille açıklar",
    prompt: "Ben bir kod açıklayıcıyım. Karmaşık kod parçalarını basit ve anlaşılır bir dille açıklayabilirim. Lütfen anlamak istediğiniz kodu paylaşın."
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrompts = SAMPLE_PROMPTS.filter(prompt =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Türkçe ChatGPT Promptları
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ChatGPT ile daha etkili konuşmalar için Türkçe prompt koleksiyonu
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Prompt ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Prompt Grid */}
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
