import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/lumiaodontologia/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://facebook.com/p/Lumia-Odontologia-especializada-100063923624494/?_rdc=1&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/573164052829"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
