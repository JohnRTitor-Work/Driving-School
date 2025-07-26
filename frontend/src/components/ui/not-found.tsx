import { SearchXIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NotFoundProps = {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  message?: string;
  className?: string;
};

export function NotFound({
  icon: Icon = SearchXIcon,
  title = "Not Found",
  message = "The item you're looking for could not be found.",
  className,
}: NotFoundProps) {
  return (
    <Card className={cn("border-dashed", className)}>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Icon className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground text-center max-w-sm">
          {message}
        </p>
      </CardContent>
    </Card>
  );
}
