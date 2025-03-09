
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  isLoading = false,
  disabled,
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary/30 text-primary hover:bg-primary/10",
    ghost: "hover:bg-secondary/50 text-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm rounded-lg",
    md: "h-11 px-5 rounded-xl",
    lg: "h-14 px-8 rounded-2xl text-lg",
    icon: "h-11 w-11 rounded-xl flex items-center justify-center",
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus-effect",
        variants[variant],
        sizes[size],
        isLoading && "opacity-80 pointer-events-none",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-current" />
        </div>
      )}
      <span className={cn(isLoading && "opacity-0")}>{children}</span>
    </button>
  );
};

export default Button;
