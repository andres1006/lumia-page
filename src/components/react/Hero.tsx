import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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
  device?: "desktop" | "mobile" | "all";
  format?: "mp4" | "webm";
}

export default function Hero({
  title,
  subtitle,
  cta1Text,
  cta2Text,
  lang,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [supportsWebM, setSupportsWebM] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Detectar si es dispositivo móvil
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Detectar soporte para WebM
    const checkWebMSupport = () => {
      const video = document.createElement("video");
      setSupportsWebM(
        video.canPlayType('video/webm; codecs="vp8, vorbis"') !== ""
      );
    };

    checkDevice();
    checkWebMSupport();

    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const heroMedia: HeroMediaItem[] = [
    // Video principal para desktop
    {
      type: "video",
      src: "/optimized-videos/img-lumia/Videos/intro-home-main.mp4",
      poster: "/optimized-videos/img-lumia/Videos/intro-home-poster.jpg",
      device: "desktop",
      format: "mp4",
    },
    // Video optimizado para móvil
    {
      type: "video",
      src: "/optimized-videos/img-lumia/Videos/intro-home-mobile.mp4",
      poster: "/optimized-videos/img-lumia/Videos/intro-home-poster.jpg",
      device: "mobile",
      format: "mp4",
    },
    // Video WebM para navegadores que lo soporten (mejor compresión)
    {
      type: "video",
      src: "/optimized-videos/img-lumia/Videos/intro-home.webm",
      poster: "/optimized-videos/img-lumia/Videos/intro-home-poster.jpg",
      device: "all",
      format: "webm",
    },
  ];

  // Filtrar medios según el dispositivo y soporte del navegador
  const getOptimizedMedia = () => {
    if (isMobile) {
      // En móvil, usar video móvil optimizado
      return heroMedia.filter(
        (media) => media.device === "mobile" || media.device === "all"
      );
    } else {
      // En desktop, priorizar WebM si está disponible, sino MP4
      if (supportsWebM) {
        return heroMedia
          .filter(
            (media) => media.device === "desktop" || media.device === "all"
          )
          .sort((a, b) => {
            // Priorizar WebM sobre MP4
            if (a.format === "webm" && b.format === "mp4") return -1;
            if (a.format === "mp4" && b.format === "webm") return 1;
            return 0;
          });
      } else {
        // Solo MP4 si no hay soporte para WebM
        return heroMedia.filter(
          (media) =>
            (media.device === "desktop" || media.device === "all") &&
            media.format === "mp4"
        );
      }
    }
  };

  const optimizedMedia = getOptimizedMedia();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (optimizedMedia.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex === optimizedMedia.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Cambiar medio cada 8 segundos

    return () => clearInterval(timer);
  }, [optimizedMedia.length]);

  // Función para renderizar el video con múltiples fuentes
  const renderVideo = (media: HeroMediaItem) => {
    if (media.type === "video") {
      return (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
          preload="metadata"
        >
          {supportsWebM && media.format === "webm" && (
            <source src={media.src} type="video/webm" />
          )}
          <source src={media.src} type="video/mp4" />
          {/* Fallback para navegadores que no soporten video */}
          <img
            src={media.poster}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </video>
      );
    }

    return (
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${media.src})`,
        }}
      />
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media Slideshow */}
      {optimizedMedia.map((media, index) => (
        <div
          key={`${media.device}-${media.format}-${index}`}
          className="absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out"
          style={{
            opacity: index === currentMediaIndex ? 1 : 0,
          }}
        >
          {renderVideo(media)}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-2xl">
            {/* Slogan */}
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 mb-2 leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {subtitle}
            </p>

            {/* CTA Minimalista */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href={lang === "es" ? "/contacto" : "/en/contact"}
                className="underline underline-offset-4 inline-flex items-center font-semibold rounded-lg text-white transition-colors duration-200 hover:font-extrabold text-sm sm:text-base"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {cta1Text}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
    </section>
  );
}
