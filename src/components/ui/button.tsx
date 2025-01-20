import { ReactNode, MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  ghost?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  secondary,
  ghost,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition duration-300 ease-in-out",
        "group inline-flex items-center space-x-2 max-w-min whitespace-nowrap",
        "px-6 py-4 rounded-sm font-lato font-medium leading-none",
        "bg-brand-stroke-weak text-brand-black",
        {
          "bg-brand-primary text-white border border-brand-primary": secondary,
          "border border-brand-stroke-strong bg-brand-fill text-brand-text-weak":
            ghost,
        },
        "hover:opacity-90",
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      <ChevronRight
        className={cn(
          "w-4 h-4 stroke-[2] transition-transform duration-300 ease-in-out transform",
          "group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;