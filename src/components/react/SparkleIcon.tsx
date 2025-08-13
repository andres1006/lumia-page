import { Sparkles } from "lucide-react";

interface SparkleIconProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function SparkleIcon({
  size = "md",
  className = "",
}: SparkleIconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <Sparkles
      className={`${sizeClasses[size]} text-primary-gold ${className}`}
    />
  );
}
