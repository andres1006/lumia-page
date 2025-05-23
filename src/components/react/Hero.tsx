import { useState, useEffect } from "react";
import { ChevronDown, Star, Users, Award } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  lang: "es" | "en";
}

export default function Hero({
  title,
  subtitle,
  cta1Text,
  cta2Text,
  lang,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      number: "2,500+",
      text: lang === "es" ? "Sonrisas Transformadas" : "Smiles Transformed",
    },
    {
      icon: Star,
      number: "4.9/5",
      text: lang === "es" ? "Calificación Promedio" : "Average Rating",
    },
    {
      icon: Award,
      number: "15+",
      text: lang === "es" ? "Años de Experiencia" : "Years of Experience",
    },
  ];

  const dotPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url("${dotPattern}")` }}
        ></div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-white/95 via-white/80 to-white/95 flex items-center justify-center">
          <div className="w-full max-w-4xl h-96 bg-gray-200 rounded-2xl shadow-luxury mx-4 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-gold text-3xl">✨</span>
              </div>
              <p className="text-lg font-medium">
                {lang === "es" ? "Imagen Hero Principal" : "Main Hero Image"}
              </p>
              <p className="text-sm mt-2">
                {lang === "es"
                  ? "Sonrisa perfecta / Tecnología avanzada"
                  : "Perfect smile / Advanced technology"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Title */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block">LUMIA:</span>
            <span className="block text-primary-gold">
              {lang === "es" ? "Donde la Ciencia" : "Where Science"}
            </span>
            <span className="block">
              {lang === "es" ? "y el Arte" : "and Art"}
            </span>
            <span className="block text-primary-gold">
              {lang === "es" ? "Crean Sonrisas" : "Create Smiles"}
            </span>
            <span className="block">
              {lang === "es" ? "Extraordinarias" : "Extraordinary"}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href={
                lang === "es"
                  ? "/servicios/diseno-de-sonrisa"
                  : "/en/services/smile-design"
              }
              className="inline-flex items-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-lg shadow-gold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {cta1Text}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href={lang === "es" ? "/contacto" : "/en/contact"}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {cta2Text}
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gold/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary-gold" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-gold" />
      </div>
    </section>
  );
}
