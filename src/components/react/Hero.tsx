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

  const heroImages = [
    '/images/hero/hero-image-1.jpg',
    '/images/hero/hero-image-2.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [heroImages.length]);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Title */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${ // Changed text-gray-900 to text-white
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
            className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${ // Changed text-gray-600 to text-gray-200
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          <div
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
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-primary-gold hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105" // Changed text colors for better contrast on dark overlay
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4"> {/* Changed bg-primary-gold/10 to bg-white/10 */}
                  <stat.icon className="w-8 h-8 text-primary-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"> {/* Changed text-gray-900 to text-white */}
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.text}</div> {/* Changed text-gray-600 to text-gray-300 */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"> {/* Ensure scroll indicator is above overlay */}
        <ChevronDown className="w-6 h-6 text-primary-gold" />
      </div>
    </section>
  );
}
