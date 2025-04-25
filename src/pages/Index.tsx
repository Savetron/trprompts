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
      {/* LOGO */}
      <div className="absolute top-6 left-6 z-30">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 space-y-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 mb-4">
              Yapay Zeka<br />
              Prompt Kütüphanesi
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in">
              ChatGPT, Claude, Gemini ve diğer yapay zeka platformları için özenle hazırlanmış Türkçe prompt koleksiyonu. Daha etkili ve verimli AI konuşmaları için ihtiyacınız olan tüm promptlar burada.
            </p>
          </div>

          <div className="flex justify-center max-w-md mx-auto mb-8 animate-fade-in">
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
          
          <div className="py-8">
            <AIPlatformSlider />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left bg-white/5 backdrop-blur-sm rounded-xl p-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
                Yapay Zeka Prompt Kütüphanesi Nedir?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Bu kütüphane, yapay zeka platformlarıyla daha etkili iletişim kurmanızı sağlayan, özenle hazırlanmış Türkçe prompt şablonları sunar. Her prompt, belirli bir amaca yönelik olarak optimize edilmiş ve test edilmiştir.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
                Neden Faydalı?
              </h2>
              <ul className="text-gray-300 space-y-3 list-disc pl-4">
                <li>Zaman tasarrufu sağlar - hazır ve test edilmiş promptlarla hızlı sonuç alırsınız</li>
                <li>Daha kaliteli çıktılar - optimize edilmiş promptlarla daha iyi yanıtlar elde edersiniz</li>
                <li>Türkçe odaklı - ana dilinizde etkili promptlar oluşturmanıza yardımcı olur</li>
                <li>Sürekli güncellenen içerik - yeni AI özellikleri için güncel promptlar</li>
              </ul>
            </div>
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

