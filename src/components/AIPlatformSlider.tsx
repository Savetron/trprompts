
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface Platform {
  name: string;
  description: string;
  logo: string;
}

const platforms: Platform[] = [
  {
    name: "ChatGPT",
    description: "OpenAI'ın güçlü dil modeli, günlük konuşmalardan kodlamaya kadar geniş bir yelpazede destek sunar.",
    logo: "/chatgpt-logo.svg"
  },
  {
    name: "Grok",
    description: "X'in esprili ve gerçek zamanlı veri odaklı AI asistanı.",
    logo: "/grok-logo.svg"
  },
  {
    name: "Claude",
    description: "Anthropic'in detaylı ve güvenilir AI asistanı, analiz ve yazma konusunda uzman.",
    logo: "/claude-logo.svg"
  },
  {
    name: "Perplexity",
    description: "Gerçek zamanlı bilgi ve araştırma odaklı AI arama motoru.",
    logo: "/perplexity-logo.svg"
  },
  {
    name: "Mistral",
    description: "Yüksek performanslı açık kaynak dil modeli.",
    logo: "/mistral-logo.svg"
  },
  {
    name: "Gemini",
    description: "Google'ın çok modlu AI modeli, görsel ve metin anlama konusunda uzman.",
    logo: "/gemini-logo.svg"
  },
  {
    name: "Meta AI",
    description: "Meta'nın sosyal medya ve iletişim odaklı AI asistanı.",
    logo: "/meta-logo.svg"
  }
];

const AIPlatformSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {platforms.map((platform, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-6 h-full hover:bg-white/10 transition-all duration-300 animate-fade-in">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4 bg-black/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-16 h-16 object-contain animate-float"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-300">{platform.description}</p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-purple-500/20" />
      <CarouselNext className="bg-white/10 hover:bg-white/20 border-purple-500/20" />
    </Carousel>
  );
};

export default AIPlatformSlider;
