
import { Copy, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Prompt } from "@/utils/csvParser";

const PromptCard = ({ title, description, prompt, category = 'Genel' }: Prompt) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast.success("Prompt kopyalandı!");
    } catch (err) {
      toast.error("Kopyalama başarısız oldu");
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {category}
            </div>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          size="icon"
          className="shrink-0 text-purple-600 hover:text-purple-800 hover:bg-purple-100"
        >
          <Copy className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-4 p-3 bg-purple-50/50 rounded-md border border-purple-100">
        <p className="text-sm text-gray-700 whitespace-pre-wrap">{prompt}</p>
      </div>
    </Card>
  );
};

export default PromptCard;
