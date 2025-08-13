import { Plane, Building2, Target, Gift } from "lucide-react";

interface TourismIconsProps {
  type: "plane" | "building" | "target" | "gift";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function TourismIcons({
  type,
  size = "md",
  className = "",
}: TourismIconsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const icons = {
    plane: Plane,
    building: Building2,
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
