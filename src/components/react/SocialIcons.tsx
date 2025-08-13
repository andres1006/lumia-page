import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
