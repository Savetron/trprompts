
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
    <Card className="bg-white p-6 shadow-card hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-secondary-foreground">{title}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Tag className="h-4 w-4" />
              {category}
            </div>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          size="icon"
          className="shrink-0 text-primary hover:text-primary-dark hover:bg-primary-light/10"
        >
          <Copy className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-4 p-3 bg-secondary rounded-md">
        <p className="text-sm text-gray-700 whitespace-pre-wrap">{prompt}</p>
      </div>
    </Card>
  );
};

export default PromptCard;
