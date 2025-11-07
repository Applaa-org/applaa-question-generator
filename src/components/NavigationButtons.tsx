import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";

interface NavigationButtonsProps {
  showHome?: boolean;
  showBack?: boolean;
  backTo?: string;
}

export default function NavigationButtons({ showHome = true, showBack = true, backTo = "/" }: NavigationButtonsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 mb-6">
      {showHome && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: "/" })}
          className="border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      )}
      {showBack && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: backTo })}
          className="border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      )}
    </div>
  );
}