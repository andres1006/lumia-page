import {
  Mountain,
  Coffee,
  Building2,
  TreePine,
  MapPin,
  Heart,
} from "lucide-react";

interface PlaceIconsProps {
  type: "mountain" | "coffee" | "building" | "forest" | "location" | "heart";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function PlaceIcons({
  type,
  size = "md",
  className = "",
}: PlaceIconsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const icons = {
    mountain: Mountain,
    coffee: Coffee,
    building: Building2,
    forest: TreePine,
    location: MapPin,
    heart: Heart,
  };

  const IconComponent = icons[type];

  return (
    <IconComponent className={`${sizeClasses[size]} text-white ${className}`} />
  );
}
