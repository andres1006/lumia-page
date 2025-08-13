import {
  Sparkles,
  Star,
  Tooth,
  Smile,
  Heart,
  Zap,
  Palette,
  Target,
  Gift,
} from "lucide-react";

interface ServiceIconsProps {
  type:
    | "sparkle"
    | "star"
    | "tooth"
    | "smile"
    | "heart"
    | "zap"
    | "palette"
    | "target"
    | "gift";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function ServiceIcons({
  type,
  size = "md",
  className = "",
}: ServiceIconsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const icons = {
    sparkle: Sparkles,
    star: Star,
    tooth: Tooth,
    smile: Smile,
    heart: Heart,
    zap: Zap,
    palette: Palette,
    target: Target,
    gift: Gift,
  };

  const IconComponent = icons[type];

  return (
    <IconComponent
      className={`${sizeClasses[size]} text-primary-gold ${className}`}
    />
  );
}
