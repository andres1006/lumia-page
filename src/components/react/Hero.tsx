import { useState, useEffect } from "react";
import { ChevronDown, Star, Users, Award } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  lang: "es" | "en";
}

interface HeroMediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
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

  const heroMedia: HeroMediaItem[] = [
    {
      type: "image",
      src: "/images/hero/hero-image-1.jpg",
      alt: "LUMIA Dental Clinic",
    },
    {
      type: "image",
      src: "/images/hero/hero-image-2.jpg",
      alt: "Modern Dental Technology",
    },
    // Ejemplo para agregar video en el futuro:
    // {
    //   type: 'video',
    //   src: '/videos/hero-video.mp4',
    //   poster: '/images/hero/video-poster.jpg'
    // }
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex === heroMedia.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change media every 8 seconds

    return () => clearInterval(timer);
  }, [heroMedia.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media Slideshow */}
      {heroMedia.map((media, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out"
          style={{
            opacity: index === currentMediaIndex ? 1 : 0,
          }}
        >
          {media.type === "image" ? (
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${media.src})`,
              }}
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={media.poster}
            >
              <source src={media.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Mobile/Tablet Content - Centered */}
        <div className="flex-1 flex items-center justify-center p-6 md:hidden">
          <div className="text-center max-w-lg">
            {/* Main Title - Mobile */}
            <h1
              className={`text-3xl text-white mb-4 leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              <span
                className="block"
                style={{
                  fontWeight: 700,
                }}
              >
                LUMIA:
              </span>
              <span
                className="block text-primary-gold"
                style={{
                  fontWeight: 700,
                }}
              >
                {lang === "es" ? "Donde la Ciencia" : "Where Science"}
              </span>
              <span
                className="block"
                style={{
                  fontWeight: 700,
                }}
              >
                {lang === "es" ? "y el Arte" : "and Art"}
              </span>
              <span
                className="block text-primary-gold"
                style={{
                  fontWeight: 700,
                }}
              >
                {lang === "es" ? "Crean Sonrisas" : "Create Smiles"}
              </span>
              <span
                className="block"
                style={{
                  fontWeight: 700,
                }}
              >
                {lang === "es" ? "Extraordinarias" : "Extraordinary"}
              </span>
            </h1>

            {/* Subtitle - Mobile */}
            <p
              className={`text-lg text-gray-200 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {subtitle}
            </p>

            {/* CTAs - Mobile */}
            <div
              className={`flex flex-col gap-3 transition-all duration-1000 delay-500 ${
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
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg shadow-gold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {cta1Text}
                <svg
                  className="ml-2 w-4 h-4"
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
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-primary-gold hover:border-primary-gold hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {cta2Text}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Content - Bottom Left */}
        <div className="hidden md:flex h-full items-end">
          <div className="max-w-7xl mx-auto w-full px-8 pb-16">
            <div className="max-w-2xl">
              {/* Main Title - Desktop */}
              <h1
                className={`text-5xl lg:text-7xl text-white mb-6 leading-tight transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                <span
                  className="block"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  LUMIA:
                </span>
                <span
                  className="block text-primary-gold"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {lang === "es" ? "Donde la Ciencia" : "Where Science"}
                </span>
                <span
                  className="block"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {lang === "es" ? "y el Arte" : "and Art"}
                </span>
                <span
                  className="block text-primary-gold"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {lang === "es" ? "Crean Sonrisas" : "Create Smiles"}
                </span>
                <span
                  className="block"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {lang === "es" ? "Extraordinarias" : "Extraordinary"}
                </span>
              </h1>

              {/* Subtitle - Desktop */}
              <p
                className={`text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {subtitle}
              </p>

              {/* CTAs - Desktop */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-500 ${
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
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                  }}
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
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-primary-gold hover:border-primary-gold hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {cta2Text}
                </a>
              </div>

              {/* Stats - Desktop */}
              <div
                className={`grid grid-cols-3 gap-8 max-w-lg transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div
                      className="text-2xl lg:text-3xl text-white mb-1"
                      style={{
                        fontWeight: 700,
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-gray-300 text-sm font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-primary-gold" />
      </div>

      {/* Media Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        {heroMedia.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMediaIndex
                ? "bg-primary-gold"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentMediaIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
