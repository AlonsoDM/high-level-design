
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  glass = false,
  hover = false,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/40 p-5 transition-all duration-300",
        glass ? "glass-card" : "bg-card",
        hover && "hover:translate-y-[-2px] hover:shadow-lg cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("mb-3", className)}>{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("mt-3 flex justify-end", className)}>{children}</div>;
};

export default Card;
