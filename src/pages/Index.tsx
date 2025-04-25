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
    <div className="relative z-10 flex flex-col min-h-screen bg-black overflow-hidden">
      {/* LOGO */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 z-30 md:left-6 md:translate-x-0 md:top-6">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto md:h-12" />
      </div>
      <AnimatedBackground />
      <div className="flex-1 flex flex-col max-w-7xl mx-auto px-4 py-12 pt-24 md:pt-12 w-full">
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
        <div className="flex-1 overflow-y-auto">
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
      <footer className="w-full py-6 text-center text-gray-400 bg-black/80 border-t border-purple-500/20 flex flex-col items-center gap-2">
        <div>
          © 2025 designed by <span className="font-semibold">@alço.dev</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://x.com/Alcodingg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            {/* X logosu SVG */}
            <svg width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1200 0H1092.86L600 671.429L107.143 0H0L514.286 714.286L0 1227H107.143L600 555.571L1092.86 1227H1200L685.714 512.714L1200 0Z"/>
            </svg>
            @Alcodingg
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

