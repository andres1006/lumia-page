import { useState } from "react";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  lang: "es" | "en";
}

export default function LanguageSelector({ lang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    es: { label: "Español", flag: "🇪🇸" },
    en: { label: "English", flag: "🇺🇸" },
  };

  const currentLang = languages[lang];
  const otherLang = lang === "es" ? "en" : "es";

  // Mapeo de rutas entre idiomas
  const routeMap = {
    // Rutas principales
    "/": "/en",
    "/en": "/",

    // Páginas estáticas
    "/nosotros": "/en/about",
    "/en/about": "/nosotros",

    "/servicios": "/en/services",
    "/en/services": "/servicios",

    "/galeria": "/en/gallery",
    "/en/gallery": "/galeria",

    "/turismo-odontologico": "/en/dental-tourism",
    "/en/dental-tourism": "/turismo-odontologico",

    "/contacto": "/en/contact",
    "/en/contact": "/contacto",

    // Servicios específicos
    "/servicios/diseno-de-sonrisa": "/en/services/smile-design",
    "/en/services/smile-design": "/servicios/diseno-de-sonrisa",

    "/servicios/implantes-dentales": "/en/services/dental-implants",
    "/en/services/dental-implants": "/servicios/implantes-dentales",

    "/servicios/ortodoncia": "/en/services/orthodontics",
    "/en/services/orthodontics": "/servicios/ortodoncia",

    "/servicios/bichectomia": "/en/services/bichectomy",
    "/en/services/bichectomy": "/servicios/bichectomia",

    "/servicios/odontologia-estetica-general":
      "/en/services/cosmetic-dentistry",
    "/en/services/cosmetic-dentistry":
      "/servicios/odontologia-estetica-general",
  };

  const getToggleUrl = () => {
    if (typeof window === "undefined") return "#";

    const currentPath = window.location.pathname;

    // Buscar en el mapeo de rutas
    if (routeMap[currentPath as keyof typeof routeMap]) {
      return routeMap[currentPath as keyof typeof routeMap];
    }

    // Fallback para rutas no mapeadas
    if (lang === "es") {
      // Si estamos en español y no hay mapeo, agregar /en
      return `/en${currentPath}`;
    } else {
      // Si estamos en inglés y no hay mapeo, quitar /en
      return currentPath.replace("/en", "") || "/";
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-gold border border-gray-200 hover:border-primary-gold rounded-lg transition-all duration-200 bg-white"
        aria-label="Selector de idioma"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-luxury z-10">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
              {lang === "es" ? "Idioma actual" : "Current language"}
            </div>
            <div className="px-4 py-2 text-sm text-gray-900 bg-gray-50 flex items-center space-x-2">
              <span>{currentLang.flag}</span>
              <span className="font-medium">{currentLang.label}</span>
            </div>
            <a
              href={getToggleUrl()}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-gold hover:bg-gray-50 transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <span>{languages[otherLang].flag}</span>
              <span>{languages[otherLang].label}</span>
            </a>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
