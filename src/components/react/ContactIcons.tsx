import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactIconsProps {
  type: "phone" | "email" | "location" | "clock";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ContactIcons({
  type,
  size = "md",
  className = "",
}: ContactIconsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const icons = {
    phone: Phone,
    email: Mail,
    location: MapPin,
    clock: Clock,
  };

  const IconComponent = icons[type];

  return (
    <IconComponent
      className={`${sizeClasses[size]} text-gray-600 ${className}`}
    />
  );
}
