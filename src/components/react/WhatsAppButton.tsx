import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone: string;
  text: string;
  className?: string;
  variant?: "primary" | "outline";
}

export default function WhatsAppButton({
  phone,
  text,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const baseClasses =
    "inline-flex items-center px-4 py-2 font-medium rounded-lg transition-all duration-300";

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    outline:
      "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
  };

  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/57${cleanPhone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {text}
    </a>
  );
}
