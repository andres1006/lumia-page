import {
  Trophy,
  TreePalm,
  Plane,
  Building2,
  Target,
  Gift,
  Landmark,
  TreePine,
} from "lucide-react";

interface BenefitIconsProps {
  type:
    | "trophy"
    | "palm"
    | "plane"
    | "hotel"
    | "target"
    | "gift"
    | "landmark"
    | "forest";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function BenefitIcons({
  type,
  size = "md",
  className = "",
}: BenefitIconsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const icons = {
    trophy: Trophy,
    palm: TreePalm,
    plane: Plane,
    hotel: Building2,
    target: Target,
    gift: Gift,
    landmark: Landmark,
    forest: TreePine,
  };

  const IconComponent = icons[type];

  return (
    <IconComponent
      className={`${sizeClasses[size]} text-primary-gold ${className}`}
    />
  );
}
