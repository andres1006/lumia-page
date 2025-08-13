import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  lang: "es" | "en";
}

export default function WhatsAppWidget({ lang }: WhatsAppWidgetProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/573000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-luxury transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label={
          lang === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"
        }
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden group-hover:block whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded text-sm absolute right-full mr-2">
          {lang === "es" ? "Escríbenos" : "Message us"}
        </span>
      </a>
    </div>
  );
}
