
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
}

const PromptCard = ({ title, description, prompt }: PromptCardProps) => {
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
          <h3 className="text-lg font-semibold text-secondary-foreground">{title}</h3>
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
